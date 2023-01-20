import React, { useCallback} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/orders.action";
import { styles } from "./styles";
import { OrderItem } from "../../components";
// import { ORDERS } from "../../constants/data";

const Orders = ({ navigation }) => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const onDelete = (id) => {
        dispatch(deleteOrder(id));
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );
    
    const renderItem = ({item}) => <OrderItem item={item} onDelete={onDelete}/>

    return (
        <View style={styles.container}>
            <FlatList data={orders} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
        </View>
    )
};

export default Orders;
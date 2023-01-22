import React from "react";
import { View, Text, Button, TouchableHighlight, StyleSheet, Dimensions, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { addToCart } from "../../store/actions/cart.actions";
import { COLORS } from "../../constants/themes/colors";

const {width} = Dimensions.get("screen");
const cardWidth = width - 20;
const Product = ({ navigation}) => {
    
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);
    const { title, price, description, weight } = product || {};

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <View style={styles.container}>

            <TouchableHighlight 
                underlayColor={COLORS.white} 
                activeOpacity={0.9} 
            >
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={product.image} style={{height: 220, width: 220 }} />
                    </View>
                        <View style={{marginHorizontal: 50, justifyContent: 'space-between' }}>
                            
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'column'}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold', }}>{product.title}</Text>
                                    <Text style={{fontSize: 8, fontWeight: 'bold', }}>{product.description}</Text>
                                </View>
                                <Text style={styles.footerInfo} >{product.weight}</Text>   
                            </View>   
                            <View style={{paddingVertical:5,}}>
                                <View style={{flexDirection: "row"}}>
                                    <Ionicons name="star" size={14} color="black" />
                                    <Ionicons name="star" size={14} color="black" />
                                    <Ionicons name="star" size={14} color="black" />
                                </View>
                                <Text>{product.reviews}</Text>
                            </View>
                            <View style={styles.cardFooterContainer}>
                                <Text style={styles.footerInfo} >${product.price}</Text>
                                    <Button
                                        title="Add to cart"
                                        onPress={onAddToCart}
                                        color= {COLORS.gameOnSecondary}
                                    />
                            </View>
                        </View> 
                </View>
            </TouchableHighlight>
        </View>  
    );
};

export default Product;


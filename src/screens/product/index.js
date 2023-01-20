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
                // onPress={()=> navigation.navigate('ProductDetails', product)} 
                // onPress={()=> navigation.navigate('ProductDetails')} 
            >
                <View style={style.card}>
                    <View style={{ alignItems: 'center', top: -40 }}>
                        <Image source={product.image} style={{height: 120, width: 120 }} />
                    </View>
                    <View style={{marginHorizontal: 20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', }}>{product.title}</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', }}>{product.description}</Text>
                        <View style={style.cardFooterContainer}>
                            {/* <Text style={style.footerInfo} >{product.weight}</Text> */}
                            <Text style={style.footerInfo} >${product.price}</Text>
                                <Button
                                    title="Add to cart"
                                    onPress={onAddToCart}
                                    color= {COLORS.gameOnSecondary}
                                />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
{/* 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.weight}>{weight}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
                title="Add to cart"
                onPress={onAddToCart}
                color= {COLORS.gameOnSecondary}
            /> */}
        </View>  
    );
};
const style = StyleSheet.create({
    header: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    optionBtn:{
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.gameOnPrimary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',	
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    categoryBtnImgContainer: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '80%',
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
    },
    cardFooterContainer: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
    },
    footerInfo: {
        backgroundColor: COLORS.gameOnSecondaryContainer,
        paddingHorizontal: 10,
        fontSize: 10,
        borderRadius: 10,
        marginVertical: 2,
        paddingVertical: 5
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20, 
        backgroundColor: COLORS.gameOnPrimary,
        justifyContent: 'center', 
        alignItems: 'center',
    }

})

export default Product;


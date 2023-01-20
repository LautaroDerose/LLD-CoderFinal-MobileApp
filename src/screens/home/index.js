import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image,  Dimensions, TouchableHighlight, TouchableOpacity, } from "react-native";
import { TextInput, ScrollView, FlatList,  } from "react-native-gesture-handler";
import { COLORS } from '../../constants/themes/colors'
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS } from '../../constants/data/products'
import { CATEGORIES } from '../../constants/data/categories'

const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20;

const HomeScreen = ({navigation}) => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const ListCategories = () => {

        return (
            <ScrollView  
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={style.categoriesListContainer} 
            >
                {CATEGORIES.map((category, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => goToProducts()} >
                        <View style={{
                            backgroundColor: selectedCategoryIndex == index
                            ? COLORS.gameOnSecondary
                            : COLORS.gameOnSecondaryContainer,
                            ...style.categoryBtn
                        }} >
                            <View style={style.categoryBtnImgContainer}>
                                <Ionicons  />
                                <Image 
                                source={category.image} 
                                style={{height: 35, width: 35, resizeMode: 'cover'}} 
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, 
                            color: selectedCategoryIndex == index
                            ? COLORS.white
                            : COLORS.grey,
                            }}>{category.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}    
            </ScrollView>
        );
    };

    const Card = ({product}) => {
        return (
            <TouchableHighlight 
                underlayColor={COLORS.white} 
                activeOpacity={0.9} 
                onPress={()=> navigation.navigate('ProductDetails', product)} 
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
                            <View style={style.addToCartBtn}>
                                <Ionicons name="add" size={22} color={COLORS.white} />     
                            </View>                     
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
            
        )
    }

    return (
        <SafeAreaView
        style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={style.header}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28}}>Hello,</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>item.User</Text>
                    </View>
                    <Text style={{marginTop: 5, fontSize: 22, color: COLORS.gameOnPrimary}}>What do you want today</Text>
                </View>
                <Image source={require('../../../assets/images/undraw_Add_to_cart_re_wrdo.png')} style={{height: 50, width: 50, borderRadius:15}} />
            </View>
            <View style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20,}}>
                <View style={style.inputContainer} >
                    <Ionicons name='search' size={28} />
                    <TextInput style={{flex:1, fontSize: 18}} placeholder='Search your product' />
                </View>
                <View style={style.optionBtn}>
                    <Ionicons name="options" size={28} color={COLORS.white} /> 
                </View>
            </View>
            <View>
                <ListCategories/>  
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={PRODUCTS}
                renderItem={({item}) => <Card product={item}/>}
            />
        </SafeAreaView>
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
        height: 220,
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

export default HomeScreen;
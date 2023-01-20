// import {React, useState} from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, } from "react-native";
// import { TextInput, ScrollView, FlatList,  } from "react-native-gesture-handler";
// import { COLORS } from "../../constants/themes/colors";
// import { Ionicons } from '@expo/vector-icons';
// import { CATEGORIES } from '../../constants/data/categories'


// // import { styles } from "./styles";
// const {width} = Dimensions.get("screen");
// const cardWidth = width/2 - 20;

// const CategoryItem = ({ item, onSelected, index}) => {
  
//     return (
        
//         // {/* <View> */}
//             <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => onSelected(item.id)} >
//                 <View style={{
//                     backgroundColor: onSelected == item.id
//                     ? COLORS.gameOnSecondary
//                     : COLORS.gameOnSecondaryContainer,
//                     ...style.categoryBtn
//                 }} >
//                     <View style={style.categoryBtnImgContainer}>
//                         <Ionicons  />
//                         <Image 
//                         source={item.image} 
//                         style={{height: 35, width: 35, resizeMode: 'cover'}} 
//                         />
//                     </View>
//                         <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, 
//                         color: onSelected == item.id
//                         ? COLORS.white
//                         : COLORS.grey,
//                         }}>{item.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         // {/* </View> */}
            
        
//         //  </ScrollView>
//     );
// };

// const style = StyleSheet.create({
//     categoriesListContainer: {
//         paddingVertical: 30,
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     categoryBtn: {
//         height: 45,
//         width: 120,
//         marginRight: 7,
//         borderRadius: 30,
//         alignItems: 'center',	
//         paddingHorizontal: 5,
//         flexDirection: 'row',
//     },
//     categoryBtnImgContainer: {
//         height: 35,
//         width: 35,
//         backgroundColor: COLORS.white,
//         borderRadius: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     card: {
//         height: 220,
//         width: cardWidth,
//         marginHorizontal: 10,
//         marginBottom: 20,
//         marginTop: 50,
//         borderRadius: 15,
//         elevation: 13,
//         backgroundColor: COLORS.white,
//     },
//     cardFooterContainer: {
//         flexDirection:'row', 
//         justifyContent: 'space-between', 
//         marginTop: 10, 
//     },
//     footerInfo: {
//         backgroundColor: COLORS.gameOnSecondaryContainer,
//         paddingHorizontal: 10,
//         fontSize: 10,
//         borderRadius: 10,
//         marginVertical: 2,
//         paddingVertical: 5
//     },
//     addToCartBtn: {
//         height: 30,
//         width: 30,
//         borderRadius: 20, 
//         backgroundColor: COLORS.gameOnPrimary,
//         justifyContent: 'center', 
//         alignItems: 'center',
//     }

// })

// export default CategoryItem;

/////////////////////////////////////////////////////////////////////////////

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            // style={{ ...styles.contentContainer, backgroundColor: COLORS.gameAmber100}}
            style={{ ...styles.contentContainer, backgroundColor: item.color}}
            onPress={() => onSelected(item)}
            >
            <View>
                {/* <Text style={styles.title}>detal</Text> */}
                <Text style={styles.title}>{item.title}</Text>
            </View>

            </TouchableOpacity>
        </View>
    );
};
export default CategoryItem;

/////////////////////////////////////////////////////////////////////////////


import React from "react";
import { View, Text, TouchableOpacity, Image,  } from "react-native";
import { COLORS } from '../../constants/themes/colors'
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.card} >
                    <View style={{ alignItems: 'center',}}>
                        <Image source={item.image} style={{height: 60, width: 60 }} />
                    </View>
                    <View style={{marginHorizontal: 20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', }}>{item.title}</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', }}>{item.description}</Text>
                        <View style={styles.cardFooterContainer}>
                            {/* <Text style={style.footerInfo} >{product.weight}</Text> */}
                            <Text style={styles.footerInfo} >${item.price}</Text>
                            <View style={styles.addToCartBtn}>
                                <Ionicons name="add" size={22} color={COLORS.white} />     
                            </View>                     
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default CategoryItem;

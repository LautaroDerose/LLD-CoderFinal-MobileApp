import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

const ProductItem = ({ item, onSelected, color }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color}}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => onSelected(item)}
            >
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>    
                    <View>
                        <View>
                            <Image source={item.image} style={{height: 90, width: 90 }} />
                        </View>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.weight}>{item.weight}</Text>
                        <View style={{flexDirection: "row"}}>
                        <Ionicons name="star" size={14} color="black" />
                        <Ionicons name="star" size={14} color="black" />
                        <Ionicons name="star" size={14} color="black" />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;
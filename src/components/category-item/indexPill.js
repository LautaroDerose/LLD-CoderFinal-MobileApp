import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./stylesPill";

const CategoryPill = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            // style={{ ...styles.contentContainer, backgroundColor: COLORS.gameAmber100}}
            style={{ ...styles.contentContainer, backgroundColor: item.color}}
            onPress={() => onSelected(item)}
            >
            <View>
                {/* <Image source={product.image} style={{height: 120, width: 120 }} /> */}
                {/* <Text style={styles.title}>detal</Text> */}
                <Text style={styles.title}>{item.title}</Text>
            </View>

            </TouchableOpacity>
        </View>
    );
};
export default CategoryPill;


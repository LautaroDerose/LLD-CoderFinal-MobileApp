import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import { styles } from "../category-item/styles";

const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

const List = ({ searchPhrase, setClicked, data}) => {
    const renderItem = ({ item }) => {
        if (searchPhrase === "") {
            return <Item name={item.name} details={item.details} />;
        }
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details}/>;
        }
        if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details}/>;
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
            onStartShouldSetResponder={()=> {
                setClicked(false);
            }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item)=> item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    list__container: {
      margin: 10,
      height: "85%",
      width: "100%",
    },
    item: {
      margin: 30,
      borderBottomWidth: 2,
      borderBottomColor: "lightgrey"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
      fontStyle: "italic",
    },
  });

export default List;





///////////////////////////       FAVS       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import React, { useState } from "react";
// import { SafeAreaView, Text, View, StyleSheet, Image,  Dimensions, TouchableHighlight, TouchableOpacity, } from "react-native";
// import { TextInput, ScrollView, FlatList,  } from "react-native-gesture-handler";
// import { COLORS } from '../../constants/themes/colors'
// import { Ionicons } from '@expo/vector-icons';
// import { CATEGORIES } from '../../constants/data/categories'


// import { useSelector, useDispatch } from 'react-redux';
// import { selectCategory } from '../../store/actions';
// import { useNavigation } from "@react-navigation/native";

// const CategoryList = ({  route, item }) => {
//     const navigation = useNavigation(); 
//     // const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.category.categories);
//     const onSelected = (item) => {
//         dispatch(selectCategory(item.id));
//         navigation.navigate('Products', {  title: item.title });
//     };

//     // const renderItem = ({ item }) => <CategoryItem  item={item} onSelected={onSelected} />;

// //////////////////////////////

//     return (
//         <ScrollView  
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         contentContainerStyle={style.categoriesListContainer} 
//         >
//             {CATEGORIES.map((category, item) => (
//                 <TouchableOpacity key={item.id} activeOpacity={0.8} onPress={onSelected} >
//                     <View style={{
//                         backgroundColor: item == item.id
//                         ? COLORS.gameOnSecondary
//                         : COLORS.gameOnSecondaryContainer,
//                         ...style.categoryBtn
//                     }} >
//                         <View style={style.categoryBtnImgContainer}>
//                             <Ionicons  />
//                             <Image 
//                             source={category.image} 
//                             style={{height: 35, width: 35, resizeMode: 'cover'}} 
//                             />
//                         </View>
//                         <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, 
//                         color: item == item.id
//                         ? COLORS.white
//                         : COLORS.grey,
//                         }}>{category.title}</Text>
//                     </View>
//                 </TouchableOpacity>
//             ))}    
//         </ScrollView>
//     );
// };
//     const style = StyleSheet.create({
//         categoriesListContainer: {
//             paddingTop: 15,
//             paddingBottom:10,
//             alignItems: 'center',
//             paddingHorizontal: 20,
//         },
//         categoryBtn: {
//             height: 45,
//             width: 120,
//             marginRight: 7,
//             borderRadius: 30,
//             alignItems: 'center',	
//             paddingHorizontal: 5,
//             flexDirection: 'row',
//         },
//         categoryBtnImgContainer: {
//             height: 35,
//             width: 35,
//             backgroundColor: COLORS.white,
//             borderRadius: 30,
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//     });

// export default CategoryList;


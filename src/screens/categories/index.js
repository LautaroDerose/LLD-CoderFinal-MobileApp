import {React, Component, useEffect, useState} from "react";
import {  SafeAreaView, View, StyleSheet, Text, Image, TouchableHighlight, Dimensions } from "react-native";
import { TextInput, ScrollView, FlatList,  } from "react-native-gesture-handler";
import { useSelector, useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors'
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS } from '../../constants/data/products'
import { CategoryItem, CategoryPill, } from '../../components'
import { selectCategory } from '../../store/actions';
import { styles } from "./styles";

import { ListItem, SearchBar } from "react-native-elements";

const Categories = ({ navigation, route }) => {



    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {  title: item.title });
    };
    const renderItem = ({ item }) => <CategoryPill  item={item} onSelected={onSelected} />;
    
    class Search extends Component {
        constructor(props) {
          super(props);
          this.state = {
              loading: false,
            data: PRODUCTS,
            error: null,
            searchValue: "",
        };
          this.arrayholder = PRODUCTS;
        }
        
        searchFunction = (text) => {
            const updatedData = this.arrayholder.filter((item) => {
                const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
          });
          this.setState({ data: updatedData, searchValue: text });
        };
        render() {
            const renderItem = ({ item }) => <CategoryItem  item={item} onSelected={onSelected} />;
            return (
              <View style={stylesSearch.container}>
                <SearchBar
                  placeholder="Search Here..."
                  lightTheme
                  round
                  value={this.state.searchValue}
                  onChangeText={(text) => this.searchFunction(text)}
                  autoCorrect={false}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
              </View>
            );
          }
        }
        

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28}}>Hello,</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>item.User</Text>
                    </View>
                    <Text style={{marginTop: 5, fontSize: 22, color: COLORS.gameOnPrimary}}>What do you want today</Text>
                </View>
                     <Image source={require('../../../assets/images/undraw_Add_to_cart_re_wrdo.png')} style={{height: 50, width: 50, borderRadius:15}} />
            </View>
            
           <View>
           <FlatList
                horizontal
                showsHorizontalScrollIndicator={false} 
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.containerList}
           />
           </View>
           <Search />
        </View>
    );
};

const stylesSearch = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        height: 50,
    }
})

export default Categories;
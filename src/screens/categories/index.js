import {React, Component, useEffect, useState} from "react";
import {  SafeAreaView, View, StyleSheet, Text, Image, TouchableHighlight} from "react-native";
import { TextInput, ScrollView, FlatList,  } from "react-native-gesture-handler";
// import { SearchBar } from "react-native-screens";
import { useSelector, useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors'
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS } from '../../constants/data/products'
import { CategoryItem, List, SearchBarComp } from '../../components'
import { selectCategory } from '../../store/actions';
import { styles } from "./styles";

import { ListItem, SearchBar } from "react-native-elements";
// import filter from "lodash.filter";

const Categories = ({ navigation, route }) => {



    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {  title: item.title });
    };
    const renderItem = ({ item }) => <CategoryItem  item={item} onSelected={onSelected} />;

    ////////// search geeksforgeeks \\\\\\\\\\
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
            return (
              <View style={styles.container}>
                <SearchBar
                  placeholder="Search Here..."
                  lightTheme
                  round
                  value={this.state.searchValue}
                  onChangeText={(text) => this.searchFunction(text)}
                  autoCorrect={false}
                />
                <FlatList
                  data={this.state.data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
            );
          }
        }
        
    ////////// search geeksforgeeks \\\\\\\\\\
    
    const Card = ({product}) => {
        return (
            <TouchableHighlight 
                underlayColor={COLORS.white} 
                activeOpacity={0.9} 
                onPress={()=> navigation.navigate('ProductDetails', product)} 
                // onPress={()=> navigation.navigate('ProductDetails')} 
            >
                <View style={style.card}>
                    {/* <View style={{ alignItems: 'center', top: -40 }}>
                        <Image source={product.image} style={{height: 120, width: 120 }} />
                    </View> */}
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

    ///////     SearchBarComp   \\\\\\\\\\\\
    // const [searchPhrase, setSearchPhrase] = useState("");
    // const [clicked, setClicked] = useState(false);
    // const [fakeData, setFakeData] = useState();

    // useEffect(() => {
    //     const getData = async () => {
    //       const apiResponse = await fetch(
    //         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    //       );
    //       const data = await apiResponse.json();
    //       setFakeData(data);
    //     };
    //     getData();
    //   }, []);
    ///////     SearchBarComp   \\\\\\\\\\\\

    return (
        <View style={styles.container}>
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
            {/* /////////////////////     SearchComp     //////////////  */}
            {/* <SafeAreaView style={sarasa.root}>
                {!clicked && <Text style={sarasa.title}>Programming Languages</Text>}
                <SearchBarComp
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                    />
                {  (
                    
                    <List
                    searchPhrase={searchPhrase}
                    data={fakeData}
                    setClicked={setClicked}
                    />
                    )}
             </SafeAreaView> */}
 
            {/* /////////////////////     SearchComp     //////////////  */}

                    {/* /////////////////////     Search     //////////////  */}
            {/* <View style={{marginTop: 20, flexDirection: 'row', paddingHorizontal: 20,}}>
                <View style={style.inputContainer} >
                    <Ionicons name='search' size={28} />
                    <TextInput style={{flex:1, fontSize: 18}} placeholder='Search your product' />
                </View>
                <View style={style.optionBtn}>
                    <Ionicons name="options" size={28} color={COLORS.white} /> 
                </View>
            </View> */}

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
           {/* <FlatList
           
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={PRODUCTS}
                renderItem={({item}) => <Card product={item}/>}
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
});
/////////////// SearchBarComp \\\\\\\\\\\\\\\\\
// const sarasa = StyleSheet.create({
    //     root: {
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     title: {
//       width: "100%",
//       marginTop: 20,
//       fontSize: 25,
//       fontWeight: "bold",
//       marginLeft: "10%",
//     },
//   });
/////////////// SearchBarComp \\\\\\\\\\\\\\\\\

export default Categories;
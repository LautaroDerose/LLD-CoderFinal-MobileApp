
///////////////////////////////////               betomoedano                 /////////////////////


// import React, { useEffect, useState } from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { COLORS } from '../../constants/themes/colors';

// const Search = () => {
  
//     const navigation = useNavigation();
  
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(()=> {
//     fetchData('https://randomuser.me/api/?results=20');
//   })

//   useEffect(()=> {
//         navigation.setOptions({
//             // headerLargeTitle: true,
//             headerTitle: 'Home',
//             headerRight: ()=>{
//           <TouchableOpacity
//             onPress={()=> navigation.navigate('')}
//             style={{
//               backgroundColor: COLORS.gameOnPrimaryContainer,
//               width: 30,
//               height: 30, 
//               borderRadius: 10,
//               justifyContent: 'center',
//             }}
//           >
//             <Text
//               style={{
//                   fontSize: 20,
//                   textAlign: 'center',
//                   color: 'white',
//               }}
//             >+</Text>
//           </TouchableOpacity>
//         },

//       })
//   }, [navigation]);

//   const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json.results);
//         setFilteredData(json.results);
//       } catch (error) {
//           console.error(error);
//         };
//     };

//   return (
//       <ScrollView style={{marginTop: 40}}>
//       <Text style={style.textFriends}>Friends</Text>
//       {
//         filteredData.map((item,index)=> {
//           return (
//             <View key={index} style={style.itemContainer}>
//               <Image 
//                 style={style.itemImage} 
//                 source={{uri: item.picture.large}} 
//               />
//               <View>
//                 <Text style={style.textName}>{item.name.first}{item.name.last}</Text>
//                 <Text style={style.textEmail}>{item.login.username}</Text>
//               </View>
//             </View>
//           )
//         })
//       }
//     </ScrollView>
//   )
// }

// const style = StyleSheet.create({
//   textFriends: {
//     fontSize: 20,
//     textAlign: 'left',
//     marginLeft: 10,
//     fontWeight: 'bold',
//     marginTop: 10,
//   }
// });

// export default Search;

// const useEffect(()=> {
//     headerSearchBarOptions: {
//           placeholder: 'Search',
//       onChangeText: (event) => {
//             searchFilterFunction(event.nativeEvent.text);
//       },
//   },
// })

// const searchFilterFunction = (text) => {
//     if(text){
    
//   } else {
//       setFilte
//   }
// };
///////////////////////////////////               betomoedano                 /////////////////////

///////////////////////////////////               SearchBarComp                 /////////////////////
// import React from 'react';
// import { View, Text, TextInput, Keyboard, Button, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { styles } from '../category-item/styles';

// const SearchBarComp = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
//   return (
//     <View style={style.container}>
//       <View 
//         style={
//           clicked
//             ? style.searchBar__clicked
//             : style.searchBar__unclicked
//         }
//       >
//         {/* <Ionicons name="md-search-circle-outline" size={24} color="black" /> */}
//         <Ionicons 
//           name="search" 
//           size={24} 
//           color="black" 
//           style={{ marginLeft: 1 }}
//         />
      
//         <TextInput 
//           style={style.input}
//           placeholder= "Search"
//           value={searchPhrase}
//           onChangeText={setSearchPhrase}
//           onFocus={()=> {
//             setClicked(true);
//           }}
//         />
//         {clicked && (
//           <Ionicons name="close" size={24} color="black" style={{ padding: 1 }} onPress={()=> {
//             setClicked("") 
//           }}/>
//         )}
//       </View>
//       {clicked && (
//         <View>
//           <Button
//             title='Cancel'
//             onPress={()=> {
//               Keyboard.dismiss();
//               setClicked(false);
//             }}
//           ></Button>
//       </View>
//       )}
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     margin: 15,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "90%",

//   },
//   searchBar__unclicked: {
//     padding: 10,
//     flexDirection: "row",
//     width: "95%",
//     backgroundColor: "#d9dbda",
//     borderRadius: 15,
//     alignItems: "center",
//   },
//   searchBar__clicked: {
//     padding: 10,
//     flexDirection: "row",
//     width: "80%",
//     backgroundColor: "#d9dbda",
//     borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "space-evenly",
//   },
//   input: {
//     fontSize: 20,
//     marginLeft: 10,
//     width: "90%",
//   },
// });

// export default SearchBarComp
///////////////////////////////////               SearchBarComp                 /////////////////////



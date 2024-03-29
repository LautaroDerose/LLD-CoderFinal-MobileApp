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





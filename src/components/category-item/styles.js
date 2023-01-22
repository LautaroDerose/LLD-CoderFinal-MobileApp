import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
const {width} = Dimensions.get("screen");
const cardWidth = width - 20;
export const styles = StyleSheet.create({
    container: {

    },
    card: {
        height: 150,
        minWidth: '45%',
        // width: '90%',
        marginHorizontal: 10,
        margin: 10,
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
});
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gameOnSecondaryContainer,
    },
    card: {
        height: '80%',
        width: 300,
        marginHorizontal: 5,
        margin: 10,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
    },
    cardFooterContainer: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
        marginTop: 15, 
    },
    footerInfo: {
        width: 50,
        backgroundColor: COLORS.gameOnSecondaryContainer,
        alignItems:'flex-end',
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
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',

    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    detailContainer: {
        width:'50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    price: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        marginVertical: 10,
        paddingRight: 15,
    },
    weight: {
        fontFamily: 'Lato-Italic',
        fontSize: 14,
        paddingVertical: 10,
    },
});
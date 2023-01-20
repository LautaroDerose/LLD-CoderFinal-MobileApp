import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 45,
        borderBottomColor: COLORS.gameOnPrimary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
    },
    message: {
        marginVertical: 5,

    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: "#FF0000",
    }
});
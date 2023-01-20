import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gameOnPrimaryContainer,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,	
        color: COLORS.gameOnPrimary,
    }
});
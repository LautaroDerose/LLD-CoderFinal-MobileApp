import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from '../../constants/themes/colors'
import { isAndroid } from "../../utils";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gameOnPrimaryContainer,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: COLORS.gameOnPrimary,
    },
    containerList: {
        // flex: 1,
        paddingTop: 10,
        marginHorizontal: 15,
    },
    header: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
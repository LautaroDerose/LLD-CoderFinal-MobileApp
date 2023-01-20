import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: COLORS.gameOnPrimary,
        borderWidth: 1,
        borderRadius: 10, 
        backgroundColor: COLORS.gameOnPrimaryContainer,
        minHeight: 320,

    },
    title: {
        fontSize: 18,
        fontWeight: 'Lato-Bold',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
    },
    
    prompt: {
        width: '100%',
        alignItems:'center',
        marginVertical: 10,
    },
    promptButton: {
        backgroundColor: COLORS.gameOnSecondaryContainer,
        borderColor:    COLORS.gameOnSecondary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptText: {
        fontSize: 14,
        color: COLORS.gameOnTeriary,
        fontFamily: 'Lato-Regular',
    },
});


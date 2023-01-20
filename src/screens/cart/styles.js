import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    listContainer:{
        flex: 1,
        backgroundColor: COLORS.gameOnPrimaryContainer,
    },
    footer: {
        // backgroundColor: COLORS.gameOnSecondaryContainer,
        borderTopWidth: 1,
        // borderTopColor: COLORS.gameOnSecondary,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: COLORS.gameOnPrimary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonConfirmDisabled: {
        backgroundColor: "#808080",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTotalTitle: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
      },
      textTotal: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
      }
});


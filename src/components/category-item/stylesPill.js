import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        height: 50,
        
    },
    contentContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color: COLORS.gameAmber100  },
});
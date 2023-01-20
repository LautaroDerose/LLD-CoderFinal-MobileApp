import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { ProductDetails } from '../screens';

const Stack = createNativeStackNavigator();

const DetailsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='productDetails' component={ProductDetails} />
        </Stack.Navigator>
    );
};

export default DetailsNavigator
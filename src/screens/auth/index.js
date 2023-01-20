import React, { useState, useReducer } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, KeyboardAvoidingView } from "react-native";
import { useDispatch } from 'react-redux';
import { COLORS } from "../../constants/themes/colors";
import { signUp, signIn } from '../../store/actions';
import { styles } from './styles';
import { isAndroid } from "../../utils";
import { Input } from "../../components";
import { UPDATED_FORM } from "../../utils/form";
import { onInputChange } from "../../utils/form";
const initialState = {
    email: {value: '', error: '', touched: false, hasError: true},
    password: {value: '', error: '', touched: false, hasError: true},
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            };
        default:
            return state;
    }
}

const  Auth = ({navigation}) => {

    const dispatch = useDispatch();    
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Register';
    const message = isLogin ? "Don't you have an Account?" : "Do you have an Account?";
    const messageAction = isLogin ? 'Login' : 'Register'; 

    const onHandleSubmit = () => {
        dispatch(isLogin ? signIn(formState.email.value, formState.password.value) : signUp(formState.email.value, formState.password.value));
    };

    const onHandleChangeInput = (value, type) => {
        onInputChange (type, value, dispatchFormState, formState);
   }

    return(
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior={isAndroid ? 'height' : 'padding' } enabled>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Input
                    label="Email"
                    placeholder='Enter you email'
                    placeholderTextColor={COLORS.gameOnSecondary}
                    keyboardType='email-address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    value = {formState.email.value}
                    hasError= {formState.email.hasError}
                    error= {formState.email.error}
                    touched= {formState.email.touched}
                    onChangeText={(text) => onHandleChangeInput(text, 'email')}
                />
                <Input
                    label="Password"
                    placeholder='Enter you password'
                    placeholderTextColor={COLORS.gameOnSecondary}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    value = {formState.password.value}
                    hasError= {formState.password.hasError}
                    error= {formState.password.error}
                    touched= {formState.password.touched}
                    onChangeText={(text) => onHandleChangeInput(text, 'password')}
                />
                <Button color={COLORS.gameOnPrimary} title={messageAction}  onPress={onHandleSubmit} disabled={!formState.isFormValid} />
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={()=> setIsLogin(!isLogin)} style={styles.promptButton} >
                        <Text style={styles.promptText}>
                            {message}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};

export default Auth;
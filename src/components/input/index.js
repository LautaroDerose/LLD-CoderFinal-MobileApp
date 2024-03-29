import React from "react";
import { View, TextInput, Text  } from 'react-native';
import { styles } from "./styles";
import Label from '../label';

const Input = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus, 
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    hasError = true,
    error = 'this field is required',
    touched = true,
    ...props
})=> {
    return(
        <View style={styles.container}>
            <Label { ...props }>
            <TextInput
            {...props}
            style={{ ...styles.input, ...style }}
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            />
            </Label>
            {hasError && touched ?(
                <View style={styles.message}>
                     <Text style={styles.helperText}>{error}</Text>
                </View>
                ) : null }
        </View>
    )
}

export default Input;
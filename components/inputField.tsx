import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

const InputField = ({ label, placeholder, keyboardType }: { label: string, placeholder: string, keyboardType: KeyboardTypeOptions }) => (
    <View style={styles.inputContainer}>
        <Text>{label}</Text>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            keyboardType={keyboardType}
            style={styles.input}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 17,
        width: '100%',
        gap: 10
    },
    input: {
        paddingVertical: 11,
        paddingLeft: 13.5,
        backgroundColor: '#D1E8FD',
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#696767',
    },
});

export default InputField;
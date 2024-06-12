import React from 'react';
import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native';

const UploadButton = ({ label, onPress }: { label: string, onPress: (event: GestureResponderEvent) => void; }) => (
    <View style={styles.uploadContainer}>
        <Text>{label}</Text>
        <Pressable onPress={onPress} style={styles.uploadButton}>
            <Text>Upload {label}</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    uploadContainer: {
        marginTop: 17,
        gap: 10,
        width: '100%',
    },
    uploadButton: {
        paddingVertical: 11,
        paddingLeft: 13.5,
        backgroundColor: '#D1E8FD',
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#696767',
    },
});

export default UploadButton;

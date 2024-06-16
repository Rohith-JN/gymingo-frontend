import { View, TextInput } from 'react-native'
import { useRouter } from 'expo-router';

import { useRef, useState } from 'react';


const LoginVerificationInput = ({ path }: { path: string }) => {
    const inputRefs = useRef<any>([]); // get type
    const [code, setCode] = useState(Array(6).fill(''));
    const router = useRouter();
    const handleTextChange = (text: string, index: number) => {
        let newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newCode.every((char) => char.length === 1)) {
            const finalCode = newCode.join('');
            // code for use later
        }
    };
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <TextInput
                    maxLength={1}
                    placeholder=""
                    keyboardType={
                        code[5] !== '' && !code.includes('')
                            ? 'default'
                            : 'numeric'
                    }
                    style={{
                        paddingVertical: 11,
                        paddingLeft: 13.5,
                        backgroundColor: 'white',
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        elevation: 3,
                    }}
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    onChangeText={(text) => handleTextChange(text, index)}
                    value={code[index]}
                    onSubmitEditing={() => {
                        router.push({
                            pathname: path,
                            params: { id: code.join('') },
                        });
                    }}
                />
            ))}
        </View>

    );
}

export default LoginVerificationInput
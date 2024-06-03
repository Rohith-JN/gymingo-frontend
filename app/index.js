import {View, Text, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';

export const ButtonHome = ({title, onPress}) => {
    
    return (
        <Pressable onPress={onPress} style={{
            padding: 20, 
            backgroundColor: 'white',
            width: '80%',
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 6, 
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            }}>
                    <Text 
                    >
                        {title}
                    </Text>
                </Pressable>
    )
}

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <View style={{flexDirection: 'column', gap: 15, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <ButtonHome title='Gym User'></ButtonHome>
                <ButtonHome title='Trainer'></ButtonHome>
                <ButtonHome title='Gym Admin' onPress={() => router.push('/admin/login')}></ButtonHome>
            </View>
        </SafeAreaView>
    )
}
export default Home
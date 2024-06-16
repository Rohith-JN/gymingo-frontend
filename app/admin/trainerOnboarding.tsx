import { SafeAreaView, ScrollView, StyleSheet, View, Text, GestureResponderEvent, Pressable, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import MainButton from "../../components/mainButton";
import { Stack } from "expo-router";
import HeaderContainer from "../../components/headerContainer";
import InputField from "../../components/inputField";

const TrainerOnboarding = () => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.keyboardAvoidingView}
                    keyboardVerticalOffset={100}
                >
                    <Stack.Screen

                        options={{
                            headerTitle: 'Trainers Onboarding',
                            headerBackTitleVisible: false
                        }}
                    />

                    <View style={styles.mainContainer}>

                        <ScrollView style={styles.scrollView} contentContainerStyle={{
                            alignItems: 'flex-start', gap: 10,
                            flexDirection: 'column',
                        }}>
                            <HeaderContainer title="ONBOARDING PROCESS" />
                            <InputField label="Name" placeholder="Enter Name" keyboardType="default" />
                            <InputField label="Age" placeholder="Enter Age" keyboardType="numeric" />
                            <InputField label="Email Address" placeholder="Enter Email Address" keyboardType="default" />
                            <InputField label="Contact Number" placeholder="Enter Number" keyboardType="numeric" />
                            <View style={styles.submitContainer}>
                                <Pressable style={styles.submitButton}>
                                    <Text>Add & Generate Credentials!</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    scrollView: {
        paddingTop: 17,
        width: '85%',
        height: '100%',

    },
    pressable: {
        paddingVertical: 11,
        paddingLeft: 13.5,
        backgroundColor: '#D1E8FD',
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#696767',
    },
    submitContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
    },
    submitButton: {
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#D1E8FD',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#696767',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
})

export default TrainerOnboarding
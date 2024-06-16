import { SafeAreaView, ScrollView, StyleSheet, View, Text, GestureResponderEvent, Pressable } from "react-native";
import MainButton from "../../../components/mainButton";
import { useRouter } from "expo-router";

const Settings = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>

                <View style={styles.scrollView}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Settings</Text>
                    <MainButton title={"Gym Details"} onPress={() => { }} />
                    <MainButton title={"Trainer Onboarding"} onPress={() => { router.push('../trainerOnboarding') }} />
                    <MainButton title={"Trainee Details"} onPress={() => { }} />
                    <MainButton title={"Location Calibration"} onPress={() => { }} />
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.pressable}><Text style={{ color: 'white', fontFamily: 'bold' }}>Log Out</Text></Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    scrollView: {
        paddingTop: 50,
        width: '85%',
        height: '100%',
        alignItems: 'flex-start', gap: 20,
        flexDirection: 'column',
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    pressable: {
        paddingVertical: 11,
        paddingHorizontal: 30,
        backgroundColor: '#EA4335',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})

export default Settings
import { SafeAreaView } from "react-native";

const OnBoardingPage = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}
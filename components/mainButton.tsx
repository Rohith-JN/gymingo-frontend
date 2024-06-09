import { GestureResponderEvent, Pressable, Text } from 'react-native';

const MainButton = ({ title, onPress }: { title: string, onPress: (event: GestureResponderEvent) => void; }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 20,
        backgroundColor: 'white',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default MainButton;

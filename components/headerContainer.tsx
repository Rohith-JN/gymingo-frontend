import { Text, View } from 'react-native'

const HeaderContainer = ({ title }: { title: string }) => {
    return (
        <View
            style={{
                borderRadius: 10,
                padding: 20,
                backgroundColor: '#D1E8FD',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{ color: '#5E8CDD', fontWeight: 'bold', fontSize: 13.2 }}
            >
                {title}
            </Text>
        </View>
    );
}

export default HeaderContainer
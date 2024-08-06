import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

const Trainer = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const data = [
        {
            id: 1,
            name: 'Arun S Nair',
        },
        {
            id: 2,
            name: 'Rohith J Nambiar',
        }
    ]

    const renderItem = ({ item }: { item: { id: number, name: string } }) => (
        <Pressable style={{ width: '100%', height: 40, backgroundColor: 'grey', borderRadius: 10, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 20 }} onPress={() => router.push('./traineePage')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
        </Pressable>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.25, backgroundColor: 'grey' }} />
            <View style={{ flex: 0.75, backgroundColor: '#373637', alignItems: 'center', }}>
                <Text style={{ marginTop: 40, color: 'white', fontWeight: 'bold' }}>Rahul Rathod</Text>

                <View style={{ width: '100%', height: 1, backgroundColor: 'grey', marginTop: 70 }} />
                <View style={{ width: '90%', justifyContent: 'flex-start', gap: 20, marginTop: 20 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Trainees</Text>
                    <FlatList data={data} renderItem={renderItem} ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>} />
                    <Pressable style={{ width: '100%', height: 40, backgroundColor: 'grey', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Trainees</Text>
                    </Pressable>
                </View>

            </View>
            <View style={styles.circle} />
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        top: '24%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        borderColor: '#373637',
        borderWidth: 2
    },
});

export default Trainer
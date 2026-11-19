import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const cardUrl = (number) =>
    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + number + '-2x.png';

const datasource = [
    {
        data: [
            {key: 'Bulbasaur', number: 1},
            {key: 'Ivysaur', number: 2},
        ],
        title: "Grass", icon: "leaf", bgcolor: "limegreen", color: "darkgreen"
    },
    {
        data: [
            {key: 'Charmander', number: 4},
            {key: 'Charmeleon', number: 5},
        ],
        title: "Fire", icon: "fire", bgcolor: "red", color: "lightyellow"
    },
    {
        data: [
            {key: 'Squirtle', number: 7},
            {key: 'Wartortle', number: 8},
        ],
        title: "Water", icon: "water", bgcolor: "royalblue", color: "white"
    },
    {
        data: [
            {key: 'Pikachu', number: 25},
            {key: 'Raichu', number: 26},
        ],
        title: "Lightning", icon: "flash", bgcolor: "gold", color: "saddlebrown"
    }
];

const renderItem = ({item, section}) => {
    return (
        <TouchableOpacity
            style={[styles.opacityStyle, {borderColor: section.bgcolor}]}
            onPress={() => Alert.alert(section.title, item.key + ' (Card #' + item.number + ')')}>
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source={{uri: cardUrl(item.number)}} style={styles.imageStyle}/>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => Alert.alert('Add Pokemon', 'This feature is coming next lesson!')}>
                <Text style={styles.buttonText}>ADD POKEMON</Text>
            </TouchableOpacity>
            <SectionList
                sections={datasource}
                contentContainerStyle={{padding: 10}}
                renderSectionHeader={({section: {title, icon, bgcolor, color}}) => (
                    <View style={[styles.headerStyle, {backgroundColor: bgcolor}]}>
                        <MaterialCommunityIcons name={icon} size={26} color={color}/>
                        <Text style={[styles.headerText, {color: color}]}>{title}</Text>
                    </View>
                )}
                renderItem={renderItem}

            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 40,
        marginBottom: 20,
    },
    buttonStyle: {
        backgroundColor: 'blue',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    opacityStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 5,
        marginBottom: 5,
        padding: 5,
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 18,
        margin: 10,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 150,
        height: 210,
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        padding: 8,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 20,
        marginLeft: 8,
        fontWeight: 'bold',
    },
});
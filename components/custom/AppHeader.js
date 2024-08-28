import {View, Text} from 'react-native';

export default function AppHeader() {
    return (
        <View style={{ backgroundColor: '#E30B5C' }}>
            <Text
                style={{
                padding: 40,
                fontSize: 30,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Courier New'
                }}>
                <Text style={{fontWeight:'bold'}}>Nothing </Text>
                is 
                <Text style={{fontWeight:'bold'}}> Everything</Text>
            </Text>
        </View>
    );
}
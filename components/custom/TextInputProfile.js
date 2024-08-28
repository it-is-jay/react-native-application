import {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';

export default function TextInputProfile() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [display_name, setDisplayName] = useState('');

    return (
        <ScrollView style={profile_styles.container}>
            <Text style={profile_styles.header}>Add some inputs to your profile</Text>
            <TextInput 
                value={first_name}
                placeholder='First Name'
                onChangeText={setFirstName}
                style={profile_styles.input}
                placeholderTextColor="#888"
            />
            <TextInput 
                value={last_name}
                placeholder='Last Name'
                onChangeText={setLastName}
                style={profile_styles.input}
                placeholderTextColor="#888"
            />
            <TextInput 
                value={display_name}
                placeholder='Display Name'
                onChangeText={setDisplayName}
                style={profile_styles.input}
                placeholderTextColor="#888"
            />
        </ScrollView>
    );
};

const profile_styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0F0F0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Courier New'
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#FFF',
        fontFamily: 'Courier New'/
    }
});

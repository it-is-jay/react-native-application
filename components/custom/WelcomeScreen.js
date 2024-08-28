import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1, flexWrap:'wrap',backgroundColor: '#953553'}}>
          <Text style={{ 
            padding: 40, 
            fontSize: 30, 
            color: 'white', 
            textAlign:'center',
          }}>
              Enter the world of Nothing is Everything!
          </Text>
          <Text
          style={{
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
          }}>
          Networking in the process to recuperate the interest within yourself and common people out there!
          </Text>
      </View>
    );
}
import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function AppFooter() {
    return (
        <View style={{ 
            flex: 0.2, 
            backgroundColor: '#E30B5C', 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            alignItems: 'center' 
          }}>
            <Text style={{ padding: 10, fontSize: 10, color: 'white' }}>
              All rights reserved <Text style={{fontWeight:'bold'}}>Empty Inc</Text>.
            </Text>
          </View>
          
    );
}

import {View, Text, ScrollView} from 'react-native';
import { StyleSheet } from 'react-native';

export default function TopicsList() {

    const topics = [
        `Topic 1\nTopic 2\nTopic 3\nTopic 4\nTopic 5\nTopic 6\nTopic 7\nTopic 8\nTopic 9\nTopic 10\nTopic 11\nTopic 12\nTopic 13\nTopic 14\nTopic 15\nTopic 16\nTopic 17\nTopic 18\nTopic 19\nTopic 20\nTopic 21\nTopic 22\nTopic 23\nTopic 24\nTopic 25\nTopic 26\nTopic 27\nTopic 28\nTopic 29\nTopic 30\nTopic 31\nTopic 32\nTopic 33\nTopic 34\nTopic 35\nTopic 36\nTopic 37\nTopic 38\nTopic 39\nTopic 40\nTopic 41\nTopic 42\nTopic 43\nTopic 44\nTopic 45\nTopic 46\nTopic 47\nTopic 48\nTopic 49\nTopic 50`
    ];
    
    return(
        <View style={{
            flex: 0.75,
            backgroundColor: '#774a5d'
        }}>
            <ScrollView  
                indicatorStyle='white' 
                style={topic_styles.container}>
                <Text style={topic_styles.header_text}>View Topics</Text>
                <Text style={topic_styles.content_text}>{topics}</Text>
            </ScrollView>
        </View>
    );
}

const topic_styles = StyleSheet.create({
    container:{
        padding: 40,
        backgroundColor: '#774a5d'
    },
    header_text :{
        fontSize: 40,
        flexWrap: 'wrap',
        color: 'white'
    },
    content_text: {
        fontSize: 35,
        color: 'white'
    }
});
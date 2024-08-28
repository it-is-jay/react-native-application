import { FlatList, View, Text, StyleSheet } from 'react-native';

function Item({name, id}) {
    return (
        <View style={topic_styles.container}>
            <Text style={topic_styles.content_text}>{name}</Text>
            <Text style={topic_styles.content_text}>{id}</Text>
        </View>
    );
}

export default function LazyLoadingList() {
    const topics = [
        { name : 'Topic 1', id: '1A' },
        { name : 'Topic 2', id: '2B' },
        { name: 'Topic 3', id: '3C' },
        { name: 'Topic 4', id: '4D' },
        { name: 'Topic 5', id: '5E' },
        { name: 'Topic 6', id: '6F' },
        { name: 'Topic 7', id: '7G' },
        { name: 'Topic 8', id: '8H' },
        { name: 'Topic 9', id: '9I' },
        { name: 'Topic 10', id: '10J' },
        { name: 'Topic 11', id: '11K' },
        { name: 'Topic 12', id: '12L' },
        { name: 'Topic 13', id: '13M' },
        { name: 'Topic 14', id: '14N' },
        { name: 'Topic 15', id: '15O' },
        { name: 'Topic 16', id: '16P' },
        { name: 'Topic 17', id: '17Q' },
        { name: 'Topic 18', id: '18R' },
        { name: 'Topic 19', id: '19S' },
        { name: 'Topic 20', id: '20T' },
        { name: 'Topic 21', id: '21U' },
        { name: 'Topic 22', id: '22V' },
        { name: 'Topic 23', id: '23W' },
        { name: 'Topic 24', id: '24X' },
        { name: 'Topic 25', id: '25Y' },
        { name: 'Topic 26', id: '26Z' },
        { name: 'Topic 27', id: '27AA' },
        { name: 'Topic 28', id: '28BB' },
        { name: 'Topic 29', id: '29CC' },
        { name: 'Topic 30', id: '30DD' },
        { name: 'Topic 31', id: '31EE' },
        { name: 'Topic 32', id: '32FF' },
        { name: 'Topic 33', id: '33GG' },
        { name: 'Topic 34', id: '34HH' },
        { name: 'Topic 35', id: '35II' },
        { name: 'Topic 36', id: '36JJ' },
        { name: 'Topic 37', id: '37KK' },
        { name: 'Topic 38', id: '38LL' },
        { name: 'Topic 39', id: '39MM' },
        { name: 'Topic 40', id: '40NN' },
        { name: 'Topic 41', id: '41OO' },
        { name: 'Topic 42', id: '42PP' },
        { name: 'Topic 43', id: '43QQ' },
        { name: 'Topic 44', id: '44RR' },
        { name: 'Topic 45', id: '45SS' },
        { name: 'Topic 46', id: '46TT' },
        { name: 'Topic 47', id: '47UU' },
        { name: 'Topic 48', id: '48VV' },
        { name: 'Topic 49', id: '49WW' },
        { name: 'Topic 50', id: '50XX' }
    ];

    const render_item = ({item}) => (
        <Item name={item.name} id={item.id}/>
    );

    const Separator = () => {
        return <View style={topic_styles.separator}></View>
    };

    const Header = () => {
        return (<Text style={topic_styles.header_text}>Lazy Loading Topic List</Text>);
    };

    const Footer = () => {
        return <Text style={{ padding: 10, fontSize: 10, color: 'white', textAlign:'center'}}>
        All rights reserved <Text style={{fontWeight:'bold'}}>Empty Inc</Text>.
      </Text>
    };

    return (
        <View style={topic_styles.list_container}>
            
            <FlatList
                data={topics}
                renderItem={render_item}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            />
        </View>
    );
}

const topic_styles = StyleSheet.create({
    list_container: {
        flex: 1, // Ensures the FlatList takes up available space
        backgroundColor: '#333333', // Background color for the entire view
    },
    container: {
        padding: 20,
        backgroundColor: '#774a5d',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_text: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
    },
    content_text: {
        fontSize: 25,
        color: 'white',
    },
    separator:{
        borderBottomWidth: 2,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF'}
});
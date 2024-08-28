import {SectionList, View, Text, StyleSheet} from 'react-native';

const Item = ({data}) => {
    return (<View style={topic_styles.item_container}>
        <Text style={topic_styles.item_text}>{data.name}</Text>
        <Text style={topic_styles.item_text}>{data.id}</Text>
    </View>);
}

export default function TopicSectionList() {
    const topics = [
        {
          broadTopic: 'Hiking Trails',
          data: [
            { id: '1A', name: 'Impact on Global Markets' },
            { id: '1B', name: 'Federal Reserve Policies' },
            { id: '1C', name: 'Interest Rate Predictions' },
            { id: '1D', name: 'Inflation Control Measures' },
            { id: '1E', name: 'Effect on Mortgage Rates' },
            { id: '1F', name: 'Economic Growth' },
          ],
        },
        {
          broadTopic: 'Formula 1',
          data: [
            { id: '2A', name: 'Race Calendar 2024' },
            { id: '2B', name: 'Driver Standings' },
            { id: '2C', name: 'Team Strategies' },
            { id: '2D', name: 'Circuit Analysis' },
            { id: '2E', name: 'Car Aerodynamics' },
            { id: '2F', name: 'Pit Stop Efficiency' },
          ],
        },
        {
          broadTopic: 'Cryptocurrency',
          data: [
            { id: '3A', name: 'Bitcoin Price Trends' },
            { id: '3B', name: 'Blockchain Technology' },
            { id: '3C', name: 'Ethereum 2.0' },
            { id: '3D', name: 'Regulatory Changes' },
            { id: '3E', name: 'Crypto Mining' },
            { id: '3F', name: 'NFT Market' },
          ],
        },
        {
          broadTopic: 'Climate Change',
          data: [
            { id: '4A', name: 'Global Warming' },
            { id: '4B', name: 'Carbon Footprint' },
            { id: '4C', name: 'Renewable Energy Sources' },
            { id: '4D', name: 'Climate Policy' },
            { id: '4E', name: 'Impact on Biodiversity' },
            { id: '4F', name: 'Sustainable Practices' },
          ],
        },
        {
          broadTopic: 'Social Networking',
          data: [
            { id: '5A', name: 'User Interaction Design' },
            { id: '5B', name: 'Privacy and Security' },
            { id: '5C', name: 'Social Graphs' },
            { id: '5D', name: 'Recommendation Systems' },
            { id: '5E', name: 'Influence and Virality' },
            { id: '5F', name: 'Content Moderation' },
          ],
        },
      ];
      
    
    const render_item = ({item}) => {
        return (<Item data={item}/>);
    };

    const render_section_header = ({section}) => {
        return (
            <Text style={topic_styles.section_header}>{section.broadTopic}</Text>
        );
    }

    const Header = () => {
        return (<Text style={topic_styles.header_text}>Topic List - Sections</Text>);
    };
    
    const Footer = () => {
        return <Text style={topic_styles.footer}>
        All rights reserved <Text style={{fontWeight:'bold'}}>EMPTY Inc</Text>.
      </Text>
    };

    const ItemSeparator = () => <View style={topic_styles.item_separator} />;

    const SectionSeparator = () => <View style={topic_styles.section_separator} />;

    return (
        <View style={topic_styles.container}>
            <SectionList
                // data={topics}
                renderItem={render_item}
                keyExtractor={(item) => item.id}
                sections={topics}
                renderSectionHeader={render_section_header}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                ItemSeparatorComponent={ItemSeparator}
                SectionSeparatorComponent={SectionSeparator}
            />

        </View>
        
    );
}

const topic_styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#333333',
        paddingTop: 10,
    },
    header_text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'Courier New'
    },
    item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        backgroundColor: '#774a5d',
        padding: 10
    },
    section_header: {
        backgroundColor: '#333333',
        color: 'white',
        padding: 5,
        fontSize: 30,
        fontFamily: 'Courier New'
    },
    item_separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    section_separator: {
        borderBottomWidth: 2,
        backgroundColor: 'grey',
        borderBottomColor: 'grey'
    },
    item_text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Courier New'
    },
    footer: {
        padding: 10, 
        fontSize: 15, 
        color: 'white', 
        textAlign:'center', 
        backgroundColor:'grey',
        fontFamily: 'Courier New'
    }
});
import React from 'react';
//react components: Core components, Community Compenents, Custom Components

//Core components
import { View } from 'react-native';

// Custom Components
import WelcomeScreen from '../../components/custom/WelcomeScreen';
import AppHeader from '../../components/custom/AppHeader';
import AppFooter from '../../components/custom/AppFooter';
import TopicsList from '../../components/custom/TopicsList';
import LazyLoadingList from '../../components/custom/LazyLoadingList';
import TopicSectionList from '../../components/custom/TopicSectionList'
import TextInputProfile from '../../components/custom/TextInputProfile'

//react components: Native components, Community Compenents, Custom Components

export default function HomeScreen() {
  return (  
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#e7e7e7',
        }}>
        <AppHeader />
        {/* <WelcomeScreen /> */}
        {/* <TopicsList /> */}
        {/* <LazyLoadingList /> */}
        <TopicSectionList/>
        <TextInputProfile/>
        
        
      </View>
      <View style={{
        flexDirection:'column-reverse'
        }}>
        {/* <AppFooter /> */}
      </View>
     </>
  );
}



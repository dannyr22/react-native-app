import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Node} from 'react';
import {SignIn, CreateAccount, Profile, Home} from './Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'light';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'light';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const border = styles.bordering;

//   return (
//     <NavigationContainer>
//       <SafeAreaView style={backgroundStyle}>
//         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={backgroundStyle}>
//           <Header style={border} />
//           <View
//             style={{
//               backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             }}>
//             <Section title="Step bing bong">
//               Edit <Text style={styles.highlight}>App.js</Text> to change this
//               screen and then come back to see your edits.
//             </Section>
//             <Section title="See Your Changes">
//               <ReloadInstructions />
//             </Section>
//             <Section title="Debug">
//               <DebugInstructions />
//             </Section>
//             <Section title="Learn More">
//               Read the docs to discover what to do next:
//             </Section>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// };

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'light';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.homeScreen}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Puppy Train'a'brain</Text>
        </View>
        <View style={styles.mainContent}>
          <Button title="Let's start the training"></Button>
        </View> */}
        <Text>This is the home screen</Text>
        <Button
          title="Details"
          onPress={() => navigation.navigate('details')}
        />
      </View>
      <View style={styles.sectionHalf}>
        <Text>This is the home screen</Text>
        <Button
          title="Details"
          onPress={() => navigation.navigate('details')}
        />
      </View>
    </>
  );
};

const DetailsScreen = () => {
  return (
    <View>
      <Text>This is the details screen</Text>
    </View>
  );
};
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bordering: {
    opacity: 0.1,
  },
  sectionHalf: {
    height: '50%',
  },
  header: {
    height: '10%',
    backgroundColor: '#fed8b1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#000',
  },
  homeScreen: {
    backgroundColor: '#fed8b1',
    height: '100%',
  },
  mainContent: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={isDarkMode ? styles.whiteText : styles.darkText}>App</Text>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
          <FancyCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },

  whiteText: {
    color: '#FFFFFF',
  },

  darkText: {
    color: '#000000',
  },

});

export default App;

import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Footer, Header, Main} from './components';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View style={styles.main}>
            <Main />
          </View>
        </ScrollView>
        <Footer />
      </View>
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
  },
  main: {
    padding: 10,
  },
});

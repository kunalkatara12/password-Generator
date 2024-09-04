import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

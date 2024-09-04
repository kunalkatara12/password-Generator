import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>Footer</Text>
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
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

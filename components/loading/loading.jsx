// loadingPage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logoImage from './CIRCLE-Logo.jpg';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      {/* Add your logo here */}
      <Image
        source={logoImage}
        style={styles.logo}
      />

      {/* Add your loading content here
      <Text style={styles.loadingText}>Placeholder</Text>
        */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 320,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoadingPage;

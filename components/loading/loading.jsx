// loadingPage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      {/* Add your logo here */}
      <Image
        style={styles.logo}
      />

      {/* Add your loading content here */}
      <Text style={styles.loadingText}>UW CIRCLE</Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can change the background color to your preference
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoadingPage;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Learning React Native</Text>
      </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
  fontSize: 16,
      fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },
  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    borderRadius: 5,
    marginBottom: 20,

  }

});

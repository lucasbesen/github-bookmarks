import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends Component {
  state = {
    modalVisible: false,
    repos: [
      {
        id: 1,
        thumbnail: 'https://warroom.securestate.com/wp-content/uploads/2015/12/github-mark.png',
        title: 'Repo 1',
        author: 'lucasbesen'
      },
      {
        id: 2,
        thumbnail: 'https://warroom.securestate.com/wp-content/uploads/2015/12/github-mark.png',
        title: 'Repo 2',
        author: 'lucasbesen'
      },
    ]
  };

  _addRepository = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Learning React Native</Text>
          <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} />) }
        </ScrollView>
        <NewRepoModal
          onSubmit={this._addRepository}
          onCancel={() => this.setState({ modalVisible: false })}
          visible={this.state.modalVisible}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  headerText: {
  fontSize: 16,
      fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  }


});

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Avatar',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Here you are!</Text>
        </View>

        <View style={styles.inventory}>
          {/* <Text>Here you are!</Text> */}
          <View style={styles.avatarImageView}>
            <Image style={{flex: 1, height: 300, width: 300}} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/02/28/man-silhouette-vector-20520228.jpg'}}></Image>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  stats:{
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsText:{
    flex: 1,
    textAlign: 'center',
  },
  inventory: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%'
  },
  avatarImageView:{
    width: '100%'
  }
});

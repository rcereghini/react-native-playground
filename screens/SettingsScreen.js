import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import { View, Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Options',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View><Text>Options</Text></View>;
  }
}

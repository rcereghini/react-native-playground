import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Outcast Chronicles',
  };

  constructor(props){
    super(props)
    this.state = {
      headerMessage: 'Outcast Chronicles',
      message: '',
      imageSource: true,
    }
  }

  render() {
    return (
      <View style={styles.app}>
        {/* <Header headerText={this.state.headerMessage} style={styles.headerComp}></Header> */}
        <ScrollView style={styles.bodyText}>
          <Text style={styles.bodyTextInner}>You've been expelled from Haven 88 along with 27 other men. Wracking your brain around the circumstances leading to the expulsion does you no good, and you know it. This is nothing more than shit luck.{'\n\n'}The sun is at it's zenith, the heat is unbearable. The light that comes from the real deal is blinding compared to the artificial sun that brings warmth and daylight to Haven 88. Sweat trickles down your neck. Peculiar birds drift in the sky in circles above you. They must know something you're currently unaware of.</Text>
          <Button title="Option One" color="brown" onPress={() => this.setState({headerMessage: 'Candy Pants'})}/>
          <Button title="Option Two" onPress={() => this.setState({headerMessage: 'Gorilla Paste Sundae'})}/>
          <Button title="Option Three" onPress={() => this.setState({headerMessage: 'Midget Partayyyy'})}/>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  app:{
    flex:1,
    backgroundColor: '#BFC0C0'
  },
  header:{
    backgroundColor: 'black',
    fontSize: 42,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerComp:{
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  headerText:{
    color: 'white',
    fontSize: 24,
    margin:12,
    marginTop: 24,
    flex: 4
  },
  bodyText:{
  },
  menuText:{
    color: 'white',
    textAlign: 'center',
    padding: 5
  },
  bodyTextInner:{
    margin: 20,
    fontSize: 24
  },
  touchMenu:{
    flex: 1,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 12
  }
});

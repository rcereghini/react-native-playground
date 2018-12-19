import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, DrawerLayoutAndroid, TouchableHighlight } from 'react-native';

class Header extends Component{
  render(){
    return (<View style={styles.header}>
              <Text style={styles.headerText}>{this.props.headerText}</Text>
              <TouchableHighlight onPress={() => alert('hi!')} style={styles.touchMenu}>
                <View>
                  <Text style={styles.menuText}>Menu</Text>
                </View>
              </TouchableHighlight>
            </View>)
  }
}

export default class App extends React.Component {

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
        <Header headerText={this.state.headerMessage} style={styles.headerComp}></Header>
        <ScrollView style={styles.bodyText}>
          <Text style={styles.bodyTextInner}>You've been expelled from Haven 88 along with 27 other men. Wracking your brain around the circumstances leading to the expulsion does you no good, and you know it. This is nothing more than shit luck.{'\n\n'}The sun is at it's zenith, the heat is unbearable. The light that comes from the real deal is blinding compared to the artificial sun that brings warmth and daylight to Haven 88. Sweat trickles down your neck. Peculiar birds drift in the sky in circles above you. They must know something you're currently unaware of.</Text>
          <Button title="Option One" color="brown" onPress={() => this.setState({headerMessage: 'Candy Pants'})}/>
          <Button title="Option Two" onPress={() => this.setState({headerMessage: 'Gorilla Paste Sundae'})}/>
          <Button title="Option Three" onPress={() => this.setState({headerMessage: 'Midget Partayyyy'})}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app:{
    flex:1
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

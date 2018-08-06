import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
          <View style={styles.item}></View>
          <View style={styles.itemDark}></View>
          <View style={styles.itemDark}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View> 
          <View style={styles.itemDark}></View>
          <View style={styles.itemDark}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.itemDark}></View>
          <View style={styles.itemDark}></View>
          <View style={styles.item}></View>
        </View>
        <View style={styles.footer}>
        </View>   
          
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  header:{
    paddingTop:30,
    backgroundColor: 'white',
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    height:100
  },
  body:{
    backgroundColor: 'red',
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  item:{
    backgroundColor:'#dcdcdc',
    width:'50%',
    height:200
  },
  itemDark:{
    backgroundColor:'#d4d4d4',
    width:'50%',
    height:200
  },
  itemColor:{
    backgroundColor:'blue',
    width:'50%',
    height:200
  },
  footer:{
    backgroundColor: 'white',
    height:100,
    borderTopColor: '#dcdcdc',
    borderTopWidth: 1,
  }
});

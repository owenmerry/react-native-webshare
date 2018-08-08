import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.menuAll}>
              <Text style={styles.menuBtn}>Links</Text>
              <Text style={styles.menuBtn}>Collections</Text>
              <Text style={styles.menuBtn}>Account</Text>
          </View>
        </View>
        <ScrollView>
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
        </ScrollView>
        <View style={styles.footer}>
        <View style={styles.menuAll}>
              <Text style={styles.menuBtn}>Links</Text>
              <Text style={styles.menuBtn}>Collections</Text>
              <Text style={styles.menuBtn}>Account</Text>
          </View>
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
    paddingTop:40,
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
    paddingTop:10,
    borderTopColor: '#dcdcdc',
    borderTopWidth: 1,
  },
  menuAll:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtn:{
    flex:1,
    fontSize:17,
    padding:10,
    textAlign:'center',
  },
});

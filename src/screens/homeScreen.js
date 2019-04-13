import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';

class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
         <Header headerTitle={'instagram'} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });

  export default HomeScreen
  
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>{this.props.headerTitle}</Text>
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
    },
   titleContainer: {
       flex: 1,
       justifyContent: 'center',
   },
    headerTitle: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    }
})
export default Header
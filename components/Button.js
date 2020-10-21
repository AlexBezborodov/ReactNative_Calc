import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Button extends React.Component {
 
  static defaultProps = {
    onPress: function() { },
    title: "",
    colror: 'white',
    backgroundColor: 'orange',
    width: 80,
    style: {}, 
  }
 
 
 
  render() {  

    var bgc = this.props.backgroundColor,
        w = this.props.width;

    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress} style={[styles.btn, { backgroundColor: bgc },{...this.props.style}]}>
            <Text style={styles.btnText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>  
    );
  }  
}

const styles = StyleSheet.create({
    btn: {
      width: 80,
      height:80,
      borderRadius: 40,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',  
    },
    btnText: {
      fontSize: 40, 
      padding: 10,
      fontWeight: 'bold',
      color: '#fff'    
    },
  });
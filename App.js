
import React, { useState } from 'react';
import { StyleSheet, Text , View } from 'react-native';
import Button from './components/Button';

export default function App() {
  
  const [currentValue, setCurrentValue] = useState('0'),
        [operator, setOperator] = useState(null),
        [prevVal, setPrevVal] = useState(null);           // prevVal = Previous value

  handleTap = (type, value) => {
    if(type === 'number') {
      setCurrentValue(`${currentValue}${value}`);
    }

    if (type === 'operator') {
      setOperator(value);
      setPrevVal(currentValue);
      setCurrentValue("0");
    }

    if(type === 'clear') {
      setCurrentValue('0');
      setOperator(null);
      setPrevVal(null);
    }

    if(type === 'posneg') {
      setCurrentValue(`${parseFloat(currentValue) * -1}`);
    }

    if(type === 'percentage') {
      setCurrentValue(`${parseFloat(currentValue) * 0.01}`);
    }

    if(type === 'equal'){
      const current = parseFloat(currentValue);
      const previous = parseFloat(prevVal);

      if(operator === '+'){
        setCurrentValue( previous + current);
        setOperator(prevVal);
        setPrevVal(null);
      }
  
      if(operator === '/'){
        setCurrentValue( previous / current);
        setOperator(null);
        setPrevVal(null);
      }
  
      if(operator === '-'){
        setCurrentValue( previous - current);
        setOperator(null);
        setPrevVal(null);
      }
  
      if(type === "*"){
        setCurrentValue( previous * current);
        setOperator(null);
        setPrevVal(null);
      }

    }

    

  }
  return (

    <View style={styles.container}>
      <View style={styles.display}>
  <Text style={styles.displayText}>{currentValue}</Text>  
      </View>
      <View style={styles.buttonsArea}>
        <View style={styles.row}>
          <Button title ="C" backgroundColor='lightgrey' onPress={() => this.handleTap("clear") }  />
          <Button title ="+/-" backgroundColor='lightgrey'onPress={() => this.handleTap("posneg")} />
          <Button title ="%" backgroundColor='lightgrey' onPress={() => this.handleTap("percentage")} />
          <Button title ="÷" onPress={() => this.handleTap("operator", "/")} />  
        </View>
        <View style={styles.row}>
          <Button title ="7" backgroundColor='#23232b' onPress={() => this.handleTap("number",7)}/>
          <Button title ="8" backgroundColor='#23232b' onPress={() => this.handleTap("number",8)}/>
          <Button title ="9" backgroundColor='#23232b' onPress={() => this.handleTap("number",9)}/>
          <Button title ="×" onPress={() => this.handleTap("operator", "*")}/>
        </View>
        <View style={styles.row}>
          <Button title ="4" backgroundColor='#23232b' onPress={() => this.handleTap("number",4)}/>
          <Button title ="5" backgroundColor='#23232b' onPress={() => this.handleTap("number",5)}/>
          <Button title ="6" backgroundColor='#23232b' onPress={() => this.handleTap("number",6)}/>
          <Button title ="-" onPress={() => this.handleTap("operator", "-")} />
        </View>
        <View style={styles.row}>
          <Button title ="1" backgroundColor='#23232b' onPress={() => this.handleTap("number",1)}/>
          <Button title ="2" backgroundColor='#23232b' onPress={() => this.handleTap("number",2)}/>
          <Button title ="3" backgroundColor='#23232b' onPress={() => this.handleTap("number",3)}/>
          <Button title ="+" onPress={() => this.handleTap("operator", "+")}/>    
        </View>
        <View style={styles.row}>
          <Button title ="0" backgroundColor='#23232b' style={styles.zero} onPress={() => this.handleTap("number",0)}/>
          <Button title ="," backgroundColor='#23232b' onPress={() => this.handleTap("number",".")} />
          <Button title ="=" onPress={() => this.handleTap("equal")} />
        </View>  
      </View>
    </View>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    flex: 3,
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  displayText: {
    fontSize: 90, 
    paddingRight: 30,
    color: '#fff'
  },
  buttonsArea: {
    flex:5,
    backgroundColor:'black',
    width: '100%',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  zero: {
    width: 160,
    alignItems: 'flex-start',
    paddingLeft:20
  },
});

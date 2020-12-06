import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

function Info() {
  return (
    <View style={styles.container}>
       <ScrollView>
      <Text style={styles.text}>Familiarize yourself with the code, and make sure you understand how navigation 
        happens in the example</Text>
      <Text style={styles.text}>Complete each of the tasks in the examples folder. Each file in this folder includes 
        a link to the React Native documentation where you will find the code to add</Text>
      <Text style={styles.greenText}>
      Important! 
      </Text>
      <Text style={styles.text}>
      Read the text in the documentation for each task, before you copy the code into the App. 
      </Text>
      <Text style={styles.text}>
      Also for several of the tasks, you should play around with the code to see the different things you can do
      </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10
  },
  text: {
    marginTop:5,
    fontSize: 20,
    color: "#51555c"
  },
  greenText: {
    marginTop:5,
    fontSize: 20,
    fontWeight:"bold",
    color: "darkgreen"
  }
});


//https://reactnative.dev/docs/intro-react#props
export default function InfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Text style={{fontSize:28,marginBottom:10}}>What to do</Text>
      <Info />
    </View>
  );
}


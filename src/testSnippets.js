import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
    return (
      <View style={styles.container}>
        <Text>snippets</Text>
      </View>
    );
 }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#CCC',
    }
});

export default App;
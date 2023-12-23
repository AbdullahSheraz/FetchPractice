import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React , {useEffect, useState} from 'react'
import { myGetFetchReq, myPostFetchReq } from './src/FetchReqs'

const App = () => {
  
  const [siteName, setsiteName] = useState('')
  const [text, onChangeText]    = useState('')

  useEffect(() => {
    getData();
  }, [])
  
  const getData = async () => {
    const res = await myGetFetchReq(text);
    setsiteName(res);
    
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Enter Site URL</Text>
      <TextInput
        style={[styles.input, {color: 'black'}]}
        onChangeText={onChangeText}
        value={text}
        selectionColor={'black'}
      />
      <TouchableOpacity onPress={getData}><View style={styles.button}><Text style={styles.buttonText}>Check Title</Text></View></TouchableOpacity>
      <Text style={{color:'black'}}>{siteName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%'
  },
  mainHeading: {
    fontSize: 29,
    fontWeight: "900",
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: 'white'
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})


export default App
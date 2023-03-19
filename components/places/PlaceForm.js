import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import ImagePicker from './ImagePicker'
import { Colors } from '../../constants/Colors'
import LocationPicker from './LocationPicker'


export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('')

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText)
  }
  return (
   <ScrollView style={styles.form}>
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput  style ={styles.input}onChangeText={changeTitleHandler} value={enteredTitle} />
    </View>
    <ImagePicker />
    <LocationPicker />
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 25,
    // paddingBottom: 10,
  }, 
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    color: Colors.accent,
    borderRadius: 5,
  },
})
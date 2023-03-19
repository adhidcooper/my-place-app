import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlinedButton from '../ui/OutlinedButton'
import { Colors } from '../../constants/Colors'

export default function LocationPicker() {
  function getLocationHandler()  {
    
  }
  function pickOnMapHandler() {

  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <OutlinedButton icon={'location'} onPress={getLocationHandler}>Locate User</OutlinedButton>
        <OutlinedButton icon={'map'} onPress={pickOnMapHandler}>Pick on Map</OutlinedButton> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    // flex: 1,
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})
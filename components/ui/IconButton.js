import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function IconButton({size, onPress, color, icon}) {
  return (

        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]} >
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        // margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
})
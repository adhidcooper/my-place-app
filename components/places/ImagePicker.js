import { StyleSheet, View, Button, Image, Text } from 'react-native'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import OutlinedButton from '../ui/OutlinedButton'

export default function ImagePicker() {
    const [pickedImage, setPickedImage] = useState()
    const [cameraPermissionInfo, requestPerimission] = useCameraPermissions();

    async function verifyPerimission() {
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
           const perimissionResponse = await requestPerimission();
           return perimissionResponse.granted;
        }
        if(cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert("Insuffient Perimissions!", 'You need to grant camera perimissions to use this app!.')
            return false;
        }
        return true;

    }

    async function takeImageHandler() {
        const hasPerimission = await verifyPerimission();
        if(!hasPerimission) {
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.5,
      })
      if (!image.canceled) {
        setPickedImage(image.assets[0].uri);
      }
    
    }
    let imagePreview = <Text style={styles.imageContainerText}>No image taken yet!</Text>
    if(pickedImage)  {
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />
    }

  return (
    <View>
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
        <OutlinedButton icon={'camera'} onPress={takeImageHandler} >Take Image</OutlinedButton>
    </View>
  )
}


const styles = StyleSheet.create({
    imagePreview: {
       width: '100%',
       height: 200,
       marginVertical: 8,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: Colors.primary100,
       borderRadius: 4,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainerText: {
        color: Colors.accent
    }
})
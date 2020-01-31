import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'

import info from '../assets/info.png'

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={info} style={styles.background}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    }
})

export default InfoScreen
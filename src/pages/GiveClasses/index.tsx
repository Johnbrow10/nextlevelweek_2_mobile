import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../GiveClasses/styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

export default function GiveClasses() {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content} >

            </ImageBackground>
        </View>
    );
}
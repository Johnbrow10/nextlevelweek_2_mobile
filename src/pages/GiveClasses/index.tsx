import React from 'react';
import { View, ImageBackground,Text } from 'react-native';
import styles from '../GiveClasses/styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

export default function GiveClasses() {
    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode='contain' 
            source={giveClassesBgImage} 
            style={styles.content} >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como um professor na nossa plataforma web.
                </Text>
            </ImageBackground>

        </View>
    );
}
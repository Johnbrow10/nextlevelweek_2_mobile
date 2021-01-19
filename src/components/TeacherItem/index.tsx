import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/Johnbrow10.png' }}
                />

                <View style={ styles.profileInfo }>
                    <Text style={styles.name}> Johnatan Silva </Text>
                    <Text style={styles.subject}> História</Text>
                </View>
            </View>
        </View>
    );
}
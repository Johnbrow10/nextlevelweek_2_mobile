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

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Johnatan Silva </Text>
                    <Text style={styles.subject}> História</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Curiosidade sobre as maiores historias que esse mundo ja ouviu falar
                {'\n'} {'\n'}
                Vidrado em todo tipo de historia desde os pre historicos homo sapiens desbravando e lutando
                 por regiões com os nerdentais as incriveis tecnologias feitas pelo homem.
            </Text>
        </View>
    );
}
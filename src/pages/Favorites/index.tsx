import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/pageHeader';

import styles from './styles';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>

                <PageHeader title="Meus proffys favoritos" />
            </View>
        </View>
    );
}
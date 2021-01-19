import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles';


export default function TeacherList() {
    return (
        <View style={styles.container}>

            <PageHeader title="Proffys Disponíveis" />

            <TeacherItem />
        </View>
    )
}
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles';


export default function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    return (
        <View style={styles.container}>

            <PageHeader title="Proffys Disponíveis">
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}> Matéria</Text>

                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#c1bccc"
                            placeholder="Qual a Matéria?"
                        ></TextInput>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}> Dia da Semana</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#c1bccc"
                                    placeholder="Qual o dia?"
                                ></TextInput>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}> Horário</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#c1bccc"
                                    placeholder="Qual Horário?"
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}
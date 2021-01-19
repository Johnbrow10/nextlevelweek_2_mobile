import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

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

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ 20,00 </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    );
}
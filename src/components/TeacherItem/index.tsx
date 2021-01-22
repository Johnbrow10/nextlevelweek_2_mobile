import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';


export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
};

interface TeacherProps {
    teacher: Teacher,
    favorited: boolean,
};

const TeacherItem: React.FC<TeacherProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp() {

        api.post('connections', {
            user_id: teacher.id,
        });

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem('favorites');

        // ai crio um array vazio para inicializalo 
        let favoritesArray = [];

        // tem que verificar se ele ja tem dados ou não se nao tiver iremos sobrescrever o array vazio
        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        //Se o professor ja estiver favoritado entao tenho que remove-lo.
        if (isFavorited) {


            // fazendo uma varredura no teacher pra achar a posição que estar no array
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            // entao uso o splice para remover um index no array e quantas posições ele precisa remover ;
            favoritesArray.splice(favoriteIndex, 1);

            //Setado que ele não é favorito
            setIsFavorited(false);

            // se não tiver favorirado, preciso adicionar aos favoritos.
        } else {


            //aqui irei adicionar o array de favoritos no Teacher
            favoritesArray.push(teacher);

            //Setado que ele e favorito
            setIsFavorited(true);
        }

        // então ele seta o favorito se ele é falso ou verdadeiro no AsyncStorage 
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }


    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> {teacher.name} </Text>
                    <Text style={styles.subject}> {teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ {teacher.cost} </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {},
                        ]}>
                        {/* Aqui verfica se tiver favoritado vai aparecer o icone de tirar do favorito */}
                        {isFavorited ?
                            <Image source={unFavoriteIcon} />
                            :
                            <Image source={heartOutlineIcon} />
                        }

                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    );
};

export default TeacherItem;

import { Archivo_700Bold } from '@expo-google-fonts/archivo';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 1,
        padding: 40,
        justifyContent: 'center',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
});

export default styles;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import MainButton from '../shared/components/main-button';

export default function Presentation() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Login');
    };

    const { width, height } = useWindowDimensions();
    return (
        <View style={{ ...styles.container, height: height }}>
            <Image
                source={require('../assets/presentation_img.png')}
                style={styles.logo}
            />
            <Text style={styles.headerText}>BEM VINDO!!!</Text>

            <Text style={styles.descriptionText}>
                É com muita alegria que te recebemos aqui!!
                {'\n'}
                {'\n'}
                Mais uma pessoa para esse lado sustentável da força!!
                {'\n'}
                {'\n'}
                clique aqui no botão abaixo e vamos lá!
            </Text>
            <MainButton text="VAMOS LÁ" callback={handleOnPress} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '40%',
        resizeMode: 'contain',
        marginTop: '10%',
    },
    divider: {
        color: '#c4c4c4',
        marginTop: '10%',
        marginBottom: '10%',
    },
    headerText: {
        color: '#0F6D84',
        fontSize: 18,
        marginBottom: '5%',
        marginTop: '10%',
    },
    descriptionText: {
        width: '80%',
        fontWeight: '300',
        fontSize: 16,
        marginBottom: '20%',
        color: '#0F6D84',
    },
});

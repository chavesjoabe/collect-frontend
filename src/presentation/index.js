import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainButton from '../shared/components/main-button';
import { styles } from './presentation.styles';

export default function Presentation({ route }) {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('MapMain', route.params);
    };

    const { width, height } = useWindowDimensions();
    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            style={{ ...styles.container, height: height }}
        >
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
        </ScrollView>
    );
}

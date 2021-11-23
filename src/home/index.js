import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Alert,
    useWindowDimensions,
} from 'react-native';
import MainButton from '../shared/components/main-button';
import { styles } from './home.styles';

export default function Home() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Login');
    };

    const { width, height } = useWindowDimensions();
    return (
        <View style={{ ...styles.container, height: height }}>
            <Image
                source={require('../assets/BigLogo.png')}
                style={styles.logo}
            />
            <Text style={styles.divider}>__________________________</Text>
            <Text style={styles.descriptionText}>
                Um lugar onde unimos quem ama o meio ambiente com quem quer
                preserva-lo Um lugar para você que está pronto para assumir a
                responsabilidade com o nosso planeta
            </Text>
            <MainButton text="COMEÇAR" callback={handleOnPress} />
        </View>
    );
}

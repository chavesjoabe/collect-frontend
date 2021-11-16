import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import FooterMenu from '../shared/components/footer-menu';
import { styles } from './styles';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/hamburger-menu.png')} />
                <Image source={require('../assets/favorites.png')} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.titleText}> Olá Fulano de tal... </Text>
                <Text style={styles.searchText}> O que temos pra hoje? </Text>
                <TextInput
                    style={styles.inputContainer}
                    autoCapitalize="none"
                    placeholder="BUSCA..."
                    keyboardType="default"
                />
            </View>
            <View style={styles.cardContainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text> Card container</Text>
                </ScrollView>
            </View>
            <FooterMenu />
        </View>
    );
}

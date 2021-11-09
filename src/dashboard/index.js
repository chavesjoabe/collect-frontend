import React from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import FooterMenu from '../shared/components/footer-menu';

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    formContainer: {
        width: '90%',
        height: '12%',
        marginBottom: '10%',
        marginTop: '5%',
    },
    inputContainer: {
        width: '100%',
        height: 75,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: '5%',
    },
    searchText: {
        fontSize: 15,
        fontWeight: '700',
    },
    titleText: {
        fontSize: 12,
        fontWeight: '300',
    },
    cardContainer: {
        width: '100%',
        height: '60%',
    },
});

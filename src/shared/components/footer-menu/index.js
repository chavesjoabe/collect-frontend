import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function FooterMenu() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/home.png')} />
            <Image source={require('../../../assets/chat.png')} />
            <Image source={require('../../../assets/profile.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '5%',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        zIndex: 4,
        backgroundColor: '#fff',
    },
});

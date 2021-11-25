import React from 'react';
import { StyleSheet } from 'react-native';
import colorConstants from '../shared/constants/color.constants';

export const styles = StyleSheet.create({
    userName: {
        fontSize: 16,
        margin: 10,
        marginTop: 30
    },
    inputContainer: {
        height: 75,
        borderColor: colorConstants.grayBorders,
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        margin: 10,
        marginTop: 0
    },
    map: {
        width: '100%',
        height: '80%',
    },
    card: {
        height: 400,
        width: '100%',
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        color: colorConstants.mainGreenCollor,
    },
    mapContainer: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    modal: {
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        padding: 20,
        margin: '10%',
        flex: 1,
        alignItems: 'center',
    },
    modalMainText: {
        fontSize: 25,
        fontWeight: '300',
        color: colorConstants.mainGreenCollor,
        marginTop: '15%',
        textAlign: 'center',
    },
    modalLinkText: {
        fontSize: 30,
        color: colorConstants.mainGreenCollor,
        marginTop: '25%',
    },
});

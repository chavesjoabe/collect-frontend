import React from 'react';
import { StyleSheet } from 'react-native';
import colorConstants from '../shared/constants/color.constants';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    logo: {
        marginTop: '15%',
    },
    formContainer: {
        width: '90%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    formText: {
        fontSize: 20,
        fontWeight: '500',
        color: colorConstants.mainGreenCollor,
    },
    dangerText: (state = 'none') => ({
        fontSize: 15,
        fontWeight: '500',
        color: 'red',
        marginTop: 10,
        display: state,
    }),
    inputContainer: {
        width: '100%',
        height: 75,
        borderColor: colorConstants.grayBorders,
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: '10%',
    },
    textRegister: {
        fontSize: 15,
        marginTop: '10%',
    },
    textLink: {
        fontSize: 15,
        color: '#2973E2',
        fontWeight: '700',
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

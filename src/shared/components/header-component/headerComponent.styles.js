import React from 'react';
import { StyleSheet } from 'react-native';
import colorConstants from '../../constants/color.constants';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
    },
    close_btn: {
        fontSize: 25,
        color: colorConstants.mainGreenCollor,
    },
    header_text: {
        color: colorConstants.mainGreenCollor,
        fontSize: 20,
        fontWeight: '500',
    },
});

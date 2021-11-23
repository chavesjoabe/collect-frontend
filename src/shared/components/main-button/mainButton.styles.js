import React from 'react';
import { StyleSheet } from 'react-native';
import colorConstants from '../../constants/color.constants';

export const styles = StyleSheet.create({
    btnNormal: {
        width: '90%',
        height: 80,
        borderRadius: 15,
        backgroundColor: colorConstants.mainBackGroundGreenCollor,
        alignItems: 'center',
        padding: 28,
    },
    btnPressed: {
        width: '90%',
        height: 80,
        borderRadius: 15,
        backgroundColor: '#258573',
        alignItems: 'center',
        padding: 28,
    },
    btnText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
    },
});

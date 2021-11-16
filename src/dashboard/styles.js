import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

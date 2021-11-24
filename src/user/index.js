import React, { useEffect, useState } from 'react';
import { styles } from './user.styles';
import {
    ScrollView,
    Text,
    TextInput,
    Alert
} from 'react-native';
import { Card } from 'react-native-paper';
import HeaderComponent from '../shared/components/header-component';
import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageConstants from '../shared/constants/storage.constants';
import apiClient from '../api/api.client';

export default function User() {
    let userId;

    useEffect(() => {
        (async () => {
            try {
                userId = await AsyncStorage.getItem(storageConstants.USER_ID);

                getPointsData();
                getUserData();
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);

    const navigation = useNavigation();

    const handlePressCloseButton = () => {
        return navigation.navigate('MapMain');
    };

    const getUserData = async () => {
        const user = await apiClient.getUserData(userId);

        
    }

    const getPointsData = async () => {
        const points = await apiClient.getPointById(userId);

        // console.log('2')
        // console.log(points)
    }

    const saveUserData = async () => {

    }

    return (
        <ScrollView style={styles.userContainer}>
            <HeaderComponent
                title="Dados do usuário"
                closeButtonCallback={handlePressCloseButton}
            />

            <Text style={styles.userName}>Nome do usuário</Text>
            <TextInput
                autoCapitalize="sentences"
                placeholder="SEU NOME"
                keyboardType="default"
                style={styles.inputContainer}
            />

            <Text style={styles.cardTitle}>Seus pontos</Text>
            <>
                <Card style={styles.card}>
                    <MapView
                        style={styles.mapContainer}
                        loadingEnabled={true}
                        style={styles.map}
                    >
                    </MapView>

                    <Card.Title
                        title="Teste"
                        subtitle="Teste 1"
                    ></Card.Title>
                </Card>
            </>
        </ScrollView>
    )
}
import React, { useEffect, useState } from 'react';
import { styles } from './user.styles';
import {
    ScrollView,
    Text,
    Image,
    View,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-paper';
import HeaderComponent from '../shared/components/header-component';
import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageConstants from '../shared/constants/storage.constants';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';

import { Modal, Portal, Provider } from 'react-native-paper';

export default function User({ route }) {
    const [userId, setUserId] = useState(null);
    let [userPoints, setUserPoints] = useState([])
    const [newUserName, setNewUserName] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                let getUserId
                if (route.params?.userId) getUserId = route.params.userId
                else getUserId = await AsyncStorage.getItem(storageConstants.USER_ID);
                
                setUserId(getUserId)

                try {
                    await Promise.all([
                        getPointData(getUserId),
                        getUserData(getUserId)
                    ]);
                } catch (ex) {
                        console.error(ex)
                    }
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);

    const navigation = useNavigation();

    const handlePressCloseButton = async () => {
        if (route.params?.updatePoints) await route.params.updatePoints()
        return navigation.navigate('MapMain');
    };

    const getUserData = async (id) => {
        console.log(id)
        const user = await apiClient.getUserData(id || userId)
        console.log('59')
        setNewUserName(user?.name)
    }

    const getPointData = async (id) => {
        const points = await apiClient.getUserPoints(id || userId)
        console.log('65')
        setUserPoints(points)
    }

    const saveUserData = async () => {
        await apiClient.updateUser(userId, {
            name: newUserName
        })
        setSuccess(true)
        return getUserData()
    }

    const removePoint = async (id) => {
        await apiClient.removePoint(id)
        return getPointData()
    }

    return (
        <>
            <ScrollView contentContainerStyle={{ width: '100%' }} >
                <>
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
                        value={newUserName}
                        onChangeText={(value) => {
                            setNewUserName(value);
                        }}
                    />

                    <MainButton
                        text="SALVAR"
                        callback={saveUserData}
                        style={{
                            alignSelf: 'center',
                        }}
                    />

                    <Text style={styles.cardTitle}>Seus pontos</Text>
                    {userPoints.map((point) => (
                        <Card key={point._id} style={styles.card}>
                            <MapView
                                initialRegion={{
                                    latitude: point.latitude,
                                    longitude: point.longitude,
                                    latitudeDelta: 0.03,
                                    longitudeDelta: 0.06,
                                }}
                                scrollEnabled={false}
                                loadingEnabled={true}
                                style={styles.map}
                            >
                                <Marker
                                    pinColor="black"
                                    coordinate={{
                                        latitude: point.latitude,
                                        longitude: point.longitude,
                                    }}
                                />
                            </MapView>

                            <Card.Title
                                title={point.name}
                                subtitle={point.description}
                                right={() => (
                                    <TouchableOpacity
                                        style={{
                                            paddingRight: 20
                                        }}
                                        onPress={() => removePoint(point._id)}
                                    >
                                        <Image
                                            source={require('../assets/remove-icon.png')}
                                            width={139}
                                            height={139}
                                        />
                                    </TouchableOpacity>
                                )}
                            ></Card.Title>
                        </Card>
                    ))}
                </>
            </ScrollView>
            <Provider>
                <Portal style={{ height: '100%' }}>
                    <Modal
                        visible={error}
                        contentContainerStyle={styles.modal}
                        dismissable={false}
                    >
                        <Image
                            source={require('../assets/warning-check.png')}
                            width={139}
                            height={139}
                        />
                        <Text style={styles.modalMainText}>
                            Você deve preencher
                            {'\n'}
                            todos o campo nome
                        </Text>
                        <Text
                            style={styles.modalLinkText}
                            onPress={() => setError(false)}
                        >
                            OK
                        </Text>
                    </Modal>
                </Portal>
            </Provider>
            <Provider>
                <Portal style={{ height: '100%' }}>
                    <Modal
                        visible={success}
                        contentContainerStyle={styles.modal}
                        dismissable={false}
                    >
                        <Image
                            source={require('../assets/confirmation-check.png')}
                        />
                        <Text style={styles.modalMainText}>
                            Parabéns!
                            {'\n'}
                            Dados atualizados com sucesso
                        </Text>
                        <Text
                            style={styles.modalLinkText}
                            onPress={() => setSuccess(false)}
                        >
                            OK
                        </Text>
                    </Modal>
                </Portal>
            </Provider>
        </>
    )
}
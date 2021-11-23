import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { FAB } from 'react-native-paper';
import apiClient from '../api/api.client';
import FooterMenu from '../shared/components/footer-menu';
import { styles } from './mapmain.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageConstants from '../shared/constants/storage.constants';
import stateConstants from '../shared/constants/state.constants';

export default function MapMain({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [pin, setPin] = useState(null);
    const [points, setPoints] = useState([]);
    const [screenState, setScreenState] = useState(
        stateConstants.MAIN_MAP_PAGE.MAIN_STATE.code
    );

    const plusIconCallback = () => {
        return setScreenState(
            stateConstants.MAIN_MAP_PAGE.POINT_REGISTRATION_STATE.code
        );
    };

    const handleOnPressBackButton = () => {
        if (
            screenState ===
            stateConstants.MAIN_MAP_PAGE.POINT_REGISTRATION_STATE.code
        )
            return setScreenState(stateConstants.MAIN_MAP_PAGE.MAIN_STATE.code);

        return navigation.navigate('Presentation');
    };

    const handleOnPressFabPlus = async () => {
        try {
            const userId = await AsyncStorage.getItem(storageConstants.USER_ID);
            setScreenState(stateConstants.MAIN_MAP_PAGE.MAIN_STATE.code);
            return navigation.navigate('PointRegistration', {
                userId,
                coordinates: pin,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let deviceLocation = await Location.getCurrentPositionAsync({});
            setLocation(deviceLocation);
            setOrigin({
                latitude: deviceLocation.coords.latitude,
                longitude: deviceLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const collectPoints = await apiClient.fetchCollectPoints();
            setPoints(collectPoints);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <FAB
                icon="arrow-left-thick"
                style={styles.backButton}
                onPress={handleOnPressBackButton}
            />
            <MapView
                style={styles.mapContainer}
                initialRegion={origin}
                showsUserLocation={screenState === 1 ? true : false}
                loadingEnabled={true}
            >
                {screenState === 1 ? (
                    points.map((point) => (
                        <Marker
                            key={point._id}
                            coordinate={{
                                latitude: point.latitude,
                                longitude: point.longitude,
                            }}
                            pinColor="black"
                        >
                            <Callout>
                                <Text>{point.name}</Text>
                                <Text>{point.description}</Text>
                            </Callout>
                        </Marker>
                    ))
                ) : (
                    <>
                        <Marker
                            coordinate={origin}
                            pinColor="red"
                            draggable={true}
                            onDragStart={(event) => {
                                console.log(
                                    'Drag start',
                                    event.nativeEvent.coordinate
                                );
                            }}
                            onDragEnd={(event) => {
                                setPin(event.nativeEvent.coordinate);
                                console.log('PIN FINAL POSITION', pin);
                            }}
                        />
                    </>
                )}
            </MapView>
            {screenState === 1 ? (
                <FooterMenu plusIconCallBack={plusIconCallback} />
            ) : (
                <FAB
                    icon="plus"
                    style={styles.FABplus}
                    onPress={handleOnPressFabPlus}
                />
            )}
        </View>
    );
}

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import FooterMenu from '../shared/components/footer-menu';
import * as Location from 'expo-location';
import { styles } from './styles';

export default function MapMain() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState(null);

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
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                placeholder="PROCURAR"
                keyboardType="email-address"
                style={styles.inputContainer}
            />
            <MapView
                style={styles.mapContainer}
                initialRegion={origin}
                showsUserLocation={true}
                loadingEnabled={true}
            >
                <Marker
                    coordinate={{
                        latitude: -23.8045571,
                        longitude: -46.5449407,
                    }}
                    pinColor="black"
                >
                    <Callout>
                        <Text>I'm here</Text>
                    </Callout>
                </Marker>
            </MapView>
            <FooterMenu />
        </View>
    );
}

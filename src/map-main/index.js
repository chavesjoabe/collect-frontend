import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import FooterMenu from '../shared/components/footer-menu';
import * as Location from 'expo-location';

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
            />
            <FooterMenu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '93%',
        width: '100%',
        marginTop: '7%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#c4c4c4',
    },
    inputContainer: {
        width: '90%',
        height: '10%',
        borderColor: '#c4c4c4',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: '5%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 2,
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
});

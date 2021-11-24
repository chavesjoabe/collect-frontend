import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card } from 'react-native-paper';
import apiClient from '../api/api.client';
import HeaderComponent from '../shared/components/header-component';
import { styles } from './pointList.styles';

export default function PointList() {
    const [points, setPoints] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const points = await apiClient.getAllPoints();
                setPoints(points);
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);

    const navigation = useNavigation();

    const handlePressCloseButton = () => {
        return navigation.navigate('MapMain');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <>
                <HeaderComponent
                    title="Pontos de Coleta"
                    closeButtonCallback={handlePressCloseButton}
                />
                {points.map((point) => (
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
                        ></Card.Title>
                    </Card>
                ))}
            </>
        </ScrollView>
    );
}

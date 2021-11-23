import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import apiClient from '../api/api.client';
import HeaderComponent from '../shared/components/header-component';

export default function PointList() {
    const [points, setPoints] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const points = await apiClient.getAllPoints();
                setPoints(points);
                console.log(points);
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
        <ScrollView contentContainerStyle={{ width: '100%' }}>
            <HeaderComponent
                title="Pontos de Coleta"
                closeButtonCallback={handlePressCloseButton}
            />
            {points.map((point) => (
                <Card key={point._id} style={{ height: 400, marginTop: 20 }}>
                    <Card.Content>
                        <MapView
                            initialRegion={{
                                latitude: point.latitude,
                                longitude: point.longitude,
                                latitudeDelta: 0.03,
                                longitudeDelta: 0.06,
                            }}
                            scrollEnabled={false}
                            loadingEnabled={true}
                            style={{ width: '100%', height: '80%' }}
                        >
                            <Marker
                                pinColor="black"
                                coordinate={{
                                    latitude: point.latitude,
                                    longitude: point.longitude,
                                }}
                            />
                        </MapView>
                    </Card.Content>
                    <Card.Title
                        title={point.name}
                        subtitle={point.description}
                    ></Card.Title>
                </Card>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

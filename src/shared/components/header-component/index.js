import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './headerComponent.styles';

const props = {
    title: String,
    closeButtonCallback: Function,
};

export default function HeaderComponent(props) {
    return (
        <View style={styles.container}>
            <Button
                icon="close-thick"
                mode="text"
                onPress={() => {
                    props.closeButtonCallback();
                }}
                labelStyle={styles.close_btn}
            ></Button>
            <Text style={styles.header_text}> {props.title} </Text>
        </View>
    );
}

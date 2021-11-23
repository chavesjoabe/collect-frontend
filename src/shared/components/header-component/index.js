import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

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
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
    },
    close_btn: {
        fontSize: 25,
        color: '#0C7C68',
    },
    header_text: {
        color: '#0C7C68',
        fontSize: 20,
        fontWeight: '500',
    },
});

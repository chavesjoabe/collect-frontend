import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const props = {
    text: String,
    callback: Function,
};

export default function MainButton(props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableHighlight
            onPress={() => {
                props.callback();
            }}
            underlayColor="#7BA9EE"
            style={styles.btnNormal}
        >
            <Text style={styles.btnText}> {props.text} </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    btnNormal: {
        width: '90%',
        height: 80,
        borderRadius: 15,
        backgroundColor: '#19A98F',
        alignItems: 'center',
        padding: 28,
    },
    btnPressed: {
        width: '90%',
        height: 80,
        borderRadius: 15,
        backgroundColor: '#258573',
        alignItems: 'center',
        padding: 28,
    },
    btnText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
    },
});

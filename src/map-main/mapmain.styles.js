import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    markerContainer: {
        width: 15,
        height: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    marker: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'cover',
    },
    backButton: {
        width: 60,
        height: 60,
        position: 'absolute',
        color: '#fff',
        alignItems: 'center',
        top: 0,
        left: 0,
        margin: 15,
        zIndex: 2,
    },
    FABplus: {
        width: 60,
        height: 60,
        color: '#fff',
    },
    newPointView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
        padding: 20,
        backgroundColor: '#fff'
    },
    newPointViewText: {
        fontSize: 12
    }
});

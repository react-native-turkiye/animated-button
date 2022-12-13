
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 100,
        right: 0,
        bottom: 0,
    },
    fullScreen: {
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
    },
    button: {
        position: 'absolute',
        zIndex: 101,
        right: 0,
        justifyContent: 'center',
    },
    buttonCircle: {
        height: 54,
        width: 54,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'red',
    },
    textContainer: {
        position: 'absolute',
        right: 64,
        width: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    text: {
        color: '#444',
        textAlign: 'right',
        paddingVertical: 3,
        paddingHorizontal: 10,
        fontWeight: 'normal',
    },
    textIcon: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27
    }
});

export default styles;

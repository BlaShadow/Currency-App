import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        width: 20,
        height: 20,
        margin: 10
    }, 
    text: {
        fontSize: 14,
        color: 'white'
    }
});
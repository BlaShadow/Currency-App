import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        height: 240,
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    title:{
        textAlign: 'center',
        width: '100%',
        fontSize: 24,
        fontFamily: 'sans-serif-light'
    },
    content:{
        fontFamily: 'sans-serif-light',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20
    }
});
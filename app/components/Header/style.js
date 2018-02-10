import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    image:{
        marginTop: 15,
        marginRight: 10,
        width: 20
    },
    button:{
        alignSelf: 'flex-end',
        padding: 5
    }
});

export default styles;
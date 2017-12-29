import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const inputWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    container:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        height: 48,
        borderRadius: 4
    },
    buttonText:{
        height: 48,
        padding:10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border:{
        backgroundColor: '#F0F0F0',
        width: 1
    },
    input:{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#BDBDBD',
        color: 'black'
    }
});
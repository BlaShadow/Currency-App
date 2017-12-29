import { Dimensions } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStylesheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        width: imageWidth,
        height: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideImage:{
        width: imageWidth / 1.5,
        height: imageWidth / 1.5
    },
    textLogo:{
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    }
});
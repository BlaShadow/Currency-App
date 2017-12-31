import { Dimensions } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

let imageWidth = Dimensions.get('window').width / 2;

export default EStylesheet.create({
    $containerSize: imageWidth,
    $largeImageSize: imageWidth / 1.5,
    $smallContainer: imageWidth / 2,
    $smallimageSize: imageWidth / 3,

    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        width: '$containerSize',
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideImage:{
        width: '$largeImageSize',
    },
    textLogo:{
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    }
});
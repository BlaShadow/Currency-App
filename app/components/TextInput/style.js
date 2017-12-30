import { Dimensions, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const inputWidth = Dimensions.get('window').width;

const INPUT_HEIGHT = 48;
const BORDER_RADIOUS = 4;

export default EStyleSheet.create({
    $baseBackgroundColor: 'white',
    $baseBackgroundColorModifier: 0.2,
    container: {
        width: '95%',
        height: INPUT_HEIGHT,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: BORDER_RADIOUS
    },
    button: {
        height: INPUT_HEIGHT,
        padding: 10,
        borderTopLeftRadius: BORDER_RADIOUS,
        borderBottomLeftRadius: BORDER_RADIOUS,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '$primaryBlue',
        fontSize: 18
    },
    border: {
        backgroundColor: '#E2E2E2',
        width: StyleSheet.hairlineWidth,
        height: INPUT_HEIGHT,
    },
    input: {
        flex: 1,
        height: INPUT_HEIGHT,
        borderColor: 'transparent',
        fontSize: 15,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#797979'
    }
});
import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    row:{
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text:{
        fontSize: 18,
        color: '#434343'
    },
    separator:{
        marginLeft: 20,
        backgroundColor: '#E2E2E2',
        flex: 1,
        height: StyleSheet.hairlineWidth
    },
    iconContainer:{
        width: 32,
        height: 32,
        backgroundColor: 'transparent',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width: 20,
        height: 20
    }
});

export default styles;
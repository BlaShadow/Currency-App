import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import numeral from 'numeral';

import styles from './style';

const LastConverted = ({date = new Date(), value=0.00}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                1 USD = {numeral(value).format('$0,0.00') } DOP 
                as of {moment(date).format('MMM DD, YYYY')}
            </Text>
        </View>
    );
};

export default LastConverted;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Card = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.7,
		shadowRadius: 7,
		elevation: 5,
		backgroundColor: colors.white,
		paddingVertical: 35,
		marginVertical: 25,
		borderRadius: 13,
	},
});

export default Card;

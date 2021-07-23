import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

const MainButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.textStyle}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 11,
		paddingHorizontal: 23,
		borderRadius: 10,
	},
	textStyle: {
		textAlign: 'center',
		color: colors.white,
		fontSize: 18,
	},
});

export default MainButton;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Header = ({ title }) => {
	return (
		<View style={styles.headerStyle}>
			<Text style={styles.textStyle}>{title}</Text>
			<StatusBar style='light' />
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		width: '100%',
		height: 83,
		backgroundColor: colors.dark,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		paddingTop: 33,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24,
	},
});

export default Header;

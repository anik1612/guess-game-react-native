import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: colors.dark,
		borderBottomWidth: 3,
		marginVertical: 13,
	},
});

export default Input;

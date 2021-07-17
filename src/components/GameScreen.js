import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Dimensions,
} from 'react-native';

const GameScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Start a new Game!</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.textStyle2}>Select a Number</Text>
				<TextInput style={{ marginBottom: 23 }} />
				<View style={styles.buttonStyle}>
					<Button title='Reset' color='#555350' onPress={() => {}} />
					<Button title='Submit' color='#2acf06' onPress={() => {}} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	textStyle: {
		marginTop: 15,
		padding: 7,
		fontSize: 16,
		backgroundColor: '#2acf06',
		color: 'white',
		borderRadius: 7,
	},
	textStyle2: {
		fontSize: 15,
		color: 'black',
	},
	inputContainer: {
		width: Dimensions.get('window').width / 1.3,
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.7,
		shadowRadius: 7,
		elevation: 5,
		backgroundColor: 'white',
		paddingVertical: 35,
		marginVertical: 25,
		borderRadius: 13,
	},
	buttonStyle: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});

export default GameScreen;

import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	Dimensions,
	Keyboard,
	Alert,
	TouchableWithoutFeedback,
} from 'react-native';
import colors from '../theme/colors';
import Input from './Input';
import Card from './Card';
import NumberContainer from './NumberContainer';

const GameScreen = () => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const validateTextInput = (input) => {
		setEnteredValue(input.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
	};

	const confirmInputHandler = () => {
		let chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid Number',
				'Please enter a valid number between 0 and 99',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(parseInt(enteredValue));
		setEnteredValue('');
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button title='START GAME' color={colors.success} />
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.textStyle}>Start a new Game!</Text>
				<Card style={styles.inputContainer}>
					<Text style={styles.textStyle2}>Select a Number</Text>
					<Input
						style={styles.input}
						autoFocus={true}
						keyboardType='number-pad'
						autoCorrect={false}
						maxLength={2}
						onChangeText={validateTextInput}
						value={enteredValue}
					/>
					<View style={styles.buttonStyle}>
						<View style={styles.button}>
							<Button
								title='Reset'
								color={colors.danger}
								onPress={resetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Submit'
								color={colors.success}
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	textStyle: {
		marginTop: 35,
		padding: 7,
		fontSize: 16,
		backgroundColor: colors.success,
		color: 'white',
		borderRadius: 7,
	},
	textStyle2: {
		fontSize: 15,
		color: 'black',
	},
	inputContainer: {
		width: Dimensions.get('window').width / 1.3,
	},
	buttonStyle: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	button: {
		width: '33%',
	},
	input: {
		textAlign: 'center',
		width: '33%',
	},
	summaryContainer: {
        width: '50%',
		marginTop: 29,
	},
});

export default GameScreen;

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import colors from '../theme/colors';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const GameScreen = ({ userChoice }) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'upper' && currentGuess > userChoice)
		) {
			Alert.alert(`Don't Lie!`, `You Know that this is wrong...`, [
				{ text: 'sorry', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button
					title='LOWER'
					color={colors.danger}
					onPress={nextGuessHandler.bind(this, 'lower')}
				/>
				<Button
					title='UPPER'
					color={colors.success}
					onPress={nextGuessHandler.bind(this, 'upper')}
				/>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30,
		width: 300,
		maxWidth: '80%',
	},
});

export default GameScreen;

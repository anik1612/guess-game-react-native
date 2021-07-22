import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber) {
		content = <GameScreen userChoice={userNumber} />;
	}

	return (
		<View style={styles.container}>
			<Header title='Guess Game' />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

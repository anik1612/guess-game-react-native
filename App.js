import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import AnimatedSplash from 'react-native-animated-splash-screen';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = <GameOverScreen />;
	}

	return (
		<AnimatedSplash
			translucent={true}
			isLoaded={isLoaded}
			logoImage={require('./assets/guess-game.png')}
			backgroundColor={'#FFFFFF'}
			logoHeight={650}
			logoWidth={650}
		>
			<View style={styles.container}>
				<Header title='Guess Game' />
				{content}
			</View>
		</AnimatedSplash>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

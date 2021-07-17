import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameScreen from '../components/GameScreen';
import Header from '../components/Header';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Header title='Guess Game' />
			<GameScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;

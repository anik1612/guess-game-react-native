import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	Dimensions,
} from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../theme/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.textStyle}>The Game is Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					source={require('../../assets/game-over.jpeg')}
					style={styles.image}
					resizeMode='cover'
				/>
			</View>
			<Text style={styles.userNumberText}>Number was {userNumber}</Text>
			<Text style={styles.roundsNumberText}>
				Your Phone Needed {roundsNumber} Rounds to Guess!
			</Text>
			<View style={styles.buttonContainer}>
				<MainButton onPress={onRestart}>NEW GAME</MainButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: '80%',
		height: 300,
		borderRadius: 200,
		borderWidth: 3,
		borderColor: colors.black,
		overflow: 'hidden',
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	textStyle: {
		fontSize: 23,
		fontWeight: 'bold',
	},
	buttonContainer: {
		marginVertical: 10,
		width: Dimensions.get('window').width / 1.3,
	},
	roundsNumberText: {
		backgroundColor: colors.danger,
		color: colors.white,
		fontSize: 13,
		padding: 7,
		borderRadius: 10,
		marginVertical: 10,
	},
	userNumberText: {
		backgroundColor: colors.info,
		color: colors.white,
		fontSize: 13,
		padding: 7,
		borderRadius: 10,
		marginBottom: 10,
	},
});

export default GameOverScreen;

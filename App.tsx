import React from 'react';
import { TVC } from "@touchblack/icons";
import { View, Text } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import ActionDirector from './ActionDirector';

import { Svg, G, Path } from 'react-native-svg';
const MySvg = () => (
	<Svg fill="yellow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={300} height={200}>
		<G opacity={0.8}>
			<Path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" />
		</G>
	</Svg>
);

const App = function App() {
	return (
		<View style={{ flex: 1 }}>
			<Text style={{ color: "white" }}>
				Unistyles example
			</Text>
			<ActionDirector />
		</View>
	)
}

export default App

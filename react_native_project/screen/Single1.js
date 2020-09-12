import * as React from 'react';
import { 
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Single1 extends React.Component {
  state = {
    text: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
}); 
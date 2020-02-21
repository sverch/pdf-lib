import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';

import test1 from '../tests/test1';
import test2 from '../tests/test2';
import test3 from '../tests/test3';
import test4 from '../tests/test4';
import test5 from '../tests/test5';
import test6 from '../tests/test6';
import test7 from '../tests/test7';
import test8 from '../tests/test8';
import test9 from '../tests/test9';
import test10 from '../tests/test10';
import test11 from '../tests/test11';
import test12 from '../tests/test12';
import test13 from '../tests/test13';

const red = '#FF0000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -50,
    marginBottom: 50,
  },
  button: {
    marginVertical: Platform.OS === 'android' ? 5 : 0,
  },
});

export default class TestLauncher extends Component {
  render() {
    const { onLaunchTest } = this.props;

    const TestButton = ({ test, longRunning = false }) => (
      <View style={styles.button}>
        <Button
          title={`Test ${test[0]}`}
          color={longRunning ? red : undefined}
          onPress={() => onLaunchTest(test[0], test[1])}
        />
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Tap a button to launch a test</Text>
        <TestButton test={[1, test1]} longRunning />
        <TestButton test={[2, test2]} longRunning />
        <TestButton test={[3, test3]} />
        <TestButton test={[4, test4]} />
        <TestButton test={[5, test5]} longRunning />
        <TestButton test={[6, test6]} longRunning />
        <TestButton test={[7, test7]} longRunning />
        <TestButton test={[8, test8]} />
        <TestButton test={[9, test9]} longRunning />
        <TestButton test={[10, test10]} />
        <TestButton test={[11, test11]} longRunning />
        <TestButton test={[12, test12]} />
        <TestButton test={[13, test13]} longRunning />
      </SafeAreaView>
    );
  }
}

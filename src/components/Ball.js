import {Animated, StyleSheet, View} from 'react-native';

import React, {Component} from 'react';

export default class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {x: 0, y: 600},
    }).start();
    // Animated.timing(this.position, {
    //     toValue: {x: 300, y: 600},
    //   }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'black',
  },
});

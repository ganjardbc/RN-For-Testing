import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';
import Styles from '../assets/Styles';

const styles = Styles;
const MAX_POINTS = 100;

export default class GaugeComponent extends Component {
  renderGauge = () => {
    let {currentValue} = this.props;
    let points = (currentValue / MAX_POINTS) * 100;
    return (
      <CircularProgress
        style={{top: 25}}
        size={200}
        width={15}
        fill={points}
        backgroundWidth={5}
        tintColor="#5ac4bb"
        tintColorSecondary={"#5ac4bb"}
        rotation={260}
        duration={1500}
        onAnimationComplete={(val) => console.log(val)}
        backgroundColor="#f5f5f5"
        arcSweepAngle={200}
        lineCap="butt">
          {
            (fill) => (
              <Text style={{fontSize: 42, color: '#333'}}>
                {Math.round((MAX_POINTS * fill) / 100)}
              </Text>
            )
          }
      </CircularProgress>
    )
  }

  render() {
    return (
      <View style={[{
        backgroundColor: '#fff',
        borderRadius: 16,
      }]}>

        <View style={{alignItems: 'center'}}>
          {this.renderGauge()}
        </View>
      </View>
    );
  }
}
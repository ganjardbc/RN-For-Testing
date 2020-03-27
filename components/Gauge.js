import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';
import Styles from '../assets/Styles';

const styles = Styles;

export default class GaugeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: props.currentValue,
    };
  }
  render() {
    const MAX_POINTS = 100;
    const fill = (this.state.points / MAX_POINTS) * 100;
    return (
      <View style={[{
        backgroundColor: '#fff',
        borderRadius: 16,
      }]}>

        <View style={{alignItems: 'center', paddingTop: 25}}>
          <CircularProgress
            style={{top: 20}}
            size={200}
            width={15}
            fill={fill}
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
        </View>
      </View>
    );
  }
}
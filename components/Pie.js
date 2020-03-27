import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "New York",
      population: 8538000,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    }
];
const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 0.1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
};
const screenWidth = (Dimensions.get("window").width - 20);

export default class PieComponent extends Component {
    render () {
        return (
          <View style={{
            backgroundColor: 'white',
            padding: '5%',
            borderRadius: 16,
            alignItems: 'center',
          }}>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    // backgroundColor="transparent"
                    absolute
                />
            </View>
        )
    }
}
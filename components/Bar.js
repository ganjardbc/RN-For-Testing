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

const data = {
  labels: ["Test1", "Test2", "Test3"],
  legend: ["L1", "L2", "L3"],
  data: [[60, 60, 60], [30, 30, 60], [10, 20, 50]],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};
const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#0097e4",
  backgroundGradientTo: "#00bafd",
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
  style: {
      borderRadius: 16,
      paddingLeft: 10
  },
  propsForDots: {
      r: "0",
      strokeWidth: "2",
      stroke: "#ffa726"
  }
};
const screenWidth = (Dimensions.get("window").width - 20);

export default class BarComponent extends Component {
    render () {
        return (
            <View>
                <StackedBarChart
                  style={{
                    borderRadius: 16,
                  }}
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                />
            </View>
        )
    }
}
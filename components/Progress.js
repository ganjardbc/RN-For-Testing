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
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5
};
const screenWidth = (Dimensions.get("window").width - 20);

export default class ProgressComponent extends Component {
    render () {
        return (
            <View>
                <ProgressChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        )
    }
}
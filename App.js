/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import LineComponent from './components/Line';
import PieComponent from './components/Pie';
import BarComponent from './components/Bar';
import GaugeComponent from './components/Gauge';
import SpeedoComponent from './components/Speedo';
import Styles from './assets/Styles';

const styles = Styles;

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={[{
              margin: '2.5%',
              backgroundColor: '#fff',
              borderRadius: 16,
            }, styles.shadowComponent]}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 15,
                borderBottomColor: '#f5f5f5',
                borderBottomWidth: 1
              }}>
                <View style={{
                  flex: 0.7
                }}>
                  <Image
                    source={{
                      uri: 'https://reactjs.org/logo-og.png',
                      cache: 'only-if-cached',
                    }}
                    style={{width: 40, height: 40, borderRadius: 40}}
                  />
                </View>
                <View style={{
                  flex: 4,
                  width: '100%'
                }}>
                  <Text style={styles.title}>Leevy D. Malik</Text>
                  <Text style={styles.subtitle}>Stock Accuracy</Text>
                  <Text style={styles.caption}>
                    Period# 15 Jan 2020 - 15 Feb 2020 (+15 days)
                  </Text>
                </View>
              </View>

              <View style={{
                padding: 10,
                borderLeftColor: '#5ac4bb',
                borderLeftWidth: 5,
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginBottom: 5,
                  justifyContent: 'space-between'
                }}>
                  <Text style={{
                    color: '#333', 
                    fontWeight: 'bold', 
                    fontSize: 22,
                    marginRight: 10
                  }}>
                    Perfect Order Rate
                  </Text>
                  <View style={{top: 2.5}}>
                    <Text style={styles.info}>Explore History</Text>
                  </View>
                </View>
                <Text style={styles.caption}>
                  This vehicle must stop the engine while parking and please
                  securing surrounding and confirm to loading master.
                </Text>
              </View>

              <SpeedoComponent size={200} currentValue={87} needleSharp={true}/>

              <Text style={{
                color: '#333', 
                fontWeight: 'bold', 
                fontSize: 18,
                marginBottom: 20,
                textAlign: 'center'
              }}>
                Ratio of PD Againts PR
              </Text>
            </View>

            <View style={[{
              margin: '2.5%',
              backgroundColor: '#fff',
              borderRadius: 16,
            }, styles.shadowComponent]}>
              <GaugeComponent currentValue={58}/>
              <Text style={{
                color: '#333', 
                fontWeight: 'bold', 
                fontSize: 18,
                marginBottom: 20,
                textAlign: 'center'
              }}>
                UNIQUE HITS
              </Text>
            </View>
            <View style={[{
              margin: '2.5%',
              backgroundColor: '#fff',
              borderRadius: 16,
            }, styles.shadowComponent]}>
              <LineComponent/>
            </View>
            <View style={[{
              margin: '2.5%',
              backgroundColor: '#fff',
              borderRadius: 16,
            }, styles.shadowComponent]}>
              <PieComponent/>
            </View>
            <View style={[{
              margin: '2.5%',
              backgroundColor: '#fff',
              borderRadius: 16,
            }, styles.shadowComponent]}>
              <BarComponent/>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default App;

import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../../helpers/colors';
import {icons} from '../../helpers/iconConstants';
import {styles} from '../../screens/dashboard/styles';

import {hp} from '../../helpers/constants';
import {CommomCard, Common, CommonAppBar} from '../../helpers/globleFunction';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonAppBar />
      <View style={styles.mainStyleBox}>
        <View style={styles.headerTexRow}>
          <Text style={styles.headreText}>Welcome,</Text>
          <Text style={[styles.headreText, {color: colors.green}]}>Arnab</Text>
        </View>
        <View style={styles.commonRowBox}>
          <Common
            marginRight={hp(16)}
            colorTop={colors.green56AFA7}
            colorBottom={colors.green95D5A7}
            icon={icons.flashIcon}
          />
          <Common
            marginRight={hp(16)}
            colorTop={colors.purpleB399C8}
            colorBottom={colors.purple797BA6}
            icon={icons.calendarIcon}
          />
          <Common
            colorTop={colors.orangeC6A361}
            colorBottom={colors.orangeDCAB85}
            icon={icons.timerIcon}
          />
        </View>
        <Text style={styles.headreText2}>Your impact at a glance!</Text>
        <View style={styles.infoRowBox}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.textBox}>CLASS SOLD</Text>
              <Text style={styles.subTextBox}>20</Text>
            </View>
            <View style={styles.columnDivider}></View>
            <View>
              <Text style={styles.textBox}>PASSES SOLD</Text>
              <Text style={styles.subTextBox}>18</Text>
            </View>
            <View style={styles.columnDivider}></View>
            <View>
              <Text style={styles.textBox}>NO. OF CLIENTS</Text>
              <Text style={styles.subTextBox}>12</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.rowFlex,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(20),
            },
            ,
          ]}>
          <Text style={[styles.headreText, {marginBottom: 10}]}>
            Upcoming class
          </Text>
          <Text style={styles.viewallText}>{'View all >'} </Text>
        </View>

        <CommomCard />
        <CommomCard />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

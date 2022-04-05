import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import testMainLogo from '../../assets/images/test_main_logo.png';

const MyCardsScreen = () => {
  return (
    <View style={styles.testConteiner}>
      <View style={styles.testHeader}>
        <View style={styles.testLogoContainer}>
          <Image style={styles.testLogo} source={testMainLogo} />
        </View>
        <View style={styles.testToolbarContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testConteiner: {
    backgroundColor: 'white',
    flex: 1,
  },
  testHeader: {
    top: 0,
    backgroundColor: 'black',
    height: 64,
    flexDirection: 'row',
  },
  testLogoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  testLogo: {width: '50%', resizeMode: 'contain'},
  testToolbarContainer: {flex: 1, backgroundColor: 'powderblue'},
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default MyCardsScreen;

import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import qs from 'qs';

const MyCardListItemScreen = props => {
  const myCard = props.route.params.myCard;
  return (
    <>
      {/* TODO: 헤더  및 수정버튼 */}
      <View>
        <TouchableOpacity
          style={styles.goNewMyCardScreenButton}
          onPress={() =>
            props.navigation.navigate('NewMyCardScreen', {myCard: myCard})
          }>
          <Text>수정</Text>
        </TouchableOpacity>
        <Text>이름: {myCard.user_name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  goNewMyCardScreenButton: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    padding: 10,
    right: 5,
  },
});

export default MyCardListItemScreen;

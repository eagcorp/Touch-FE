import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import qs from 'qs';

const NewMyCardScreen = props => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [test, setTest] = useState('');

  //   const myCard = props.route.params.myCard;
  console.log(props.test);

  return (
    <>
      <View style={styles.brcRootLayout}>
        <View style={styles.header}>
          <Text style={styles.title}>명함 등록</Text>
          <TouchableOpacity style={styles.submitNewMyCardFormButton}>
            <Text style={styles.submitNewMyCardFormButtonText}>등록</Text>
          </TouchableOpacity>
        </View>
        {/* TODO: Form 분리*/}
        <ScrollView style={styles.otherBackLayout}>
          <TextInput
            style={styles.inputLayout}
            placeholder="이름"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="전화번호"
            value={tel}
            onChangeText={text => setTel(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트3"
            value={test}
            onChangeText={text => setTest(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트4"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트5"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트6"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트7"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트8"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트9"
            value={test}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="테스트10"
            value={test}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  brcRootLayout: {
    flex: 1,
    backgroundColor: '#212121',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    height: 64,
  },
  title: {
    flex: 1,
    paddingStart: 16,
    paddingEnd: 16,
    fontSize: 16,
    color: '#FFFFFF',
    textAlignVertical: 'center',
  },
  otherBackLayout: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
  },
  inputLayout: {
    marginTop: 40,
    marginStart: 16,
    marginEnd: 16,
  },
  submitNewMyCardFormButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  submitNewMyCardFormButtonText: {
    paddingStart: 16,
    paddingEnd: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default NewMyCardScreen;

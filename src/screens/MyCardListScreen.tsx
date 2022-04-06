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
import testMainLogo from '../../assets/images/test_main_logo.png';
import qs from 'qs';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const MyCardListScreen = props => {
  const [myCardList, setMyCardList] = useState([]);

  useEffect(() => {
    axios
      .post(
        'http://mi07.cafe24.com/bns/api/select_my_card.php',
        qs.stringify({
          user_qrnum: 'eaguser:L5qGnVOWL4Pj',
        }),
      )
      .then(response => {
        // TODO: data.data...
        setMyCardList(response.data.data);
      });
  }, []);

  return (
    <>
      <View style={styles.conteiner}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={testMainLogo} />
          </View>
          <View style={styles.toolbarContainer}></View>
        </View>
        <TouchableOpacity
          style={styles.goNewMyCardScreenButton}
          onPress={() => props.navigation.navigate('NewMyCardScreen')}>
          <Text>추가</Text>
        </TouchableOpacity>
        {/* TODO: 컴포넌트 분리 */}
        {myCardList &&
          myCardList.map(myCard => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                key={myCard.uid}
                onPress={() =>
                  props.navigation.navigate('MyCardListItemScreen', {
                    myCard: myCard,
                  })
                }>
                <Text>이름: {myCard.user_name}</Text>
                <Text>회사명: {myCard.company_name}</Text>
                <Text>직급: {myCard.user_position}</Text>
              </TouchableOpacity>
            );
          })}
        <TouchableOpacity
          style={styles.goTestScreenButton}
          onPress={() => props.navigation.navigate('TestScreen')}>
          <Text>테스트 스크린 이동</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    top: 0,
    backgroundColor: 'black',
    height: 64,
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  logo: {width: '50%', resizeMode: 'contain'},
  toolbarContainer: {flex: 7, backgroundColor: 'powderblue'},
  goTestScreenButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    borderBottomWidth: 2,
  },
  goNewMyCardScreenButton: {
    backgroundColor: 'skyblue',
  },
});

export default MyCardListScreen;

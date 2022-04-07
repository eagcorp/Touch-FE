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
  const myCard = props.route.params.myCard;

  const [userUniqueNum, setUserUniqueNum] = useState(myCard.user_unique_num);
  const [cardUniqueNum, setCardUniqueNim] = useState(myCard.card_unique_num);
  const [favoriteCard, setFavoriteCard] = useState(myCard.favorite_card);
  const [companyImage, setCompanyImage] = useState(myCard.company_image);
  const [companyOriginalImage, setCompanyOriginalImage] = useState(
    myCard.company_original_image,
  );
  const [userName, setUserName] = useState(myCard.user_name);
  const [companyName, setCompanyName] = useState(myCard.company_name);
  const [userDepartment, setUserDepartment] = useState(myCard.user_department);
  const [userPosition, setUserPosition] = useState(myCard.user_position);
  const [userPhone, setUserPhone] = useState(myCard.user_phone);
  const [companyAddress, setCompanyAddress] = useState(myCard.company_address);
  const [companyAddress2, setCompanyAddress2] = useState(
    myCard.company_address2,
  );
  const [companyLat, setCompanyLat] = useState('');
  const [companyLon, setCompanyLon] = useState('');
  // TODO
  const [use, setUse] = useState('Y');
  const [companyWork, setCompanyWork] = useState(myCard.company_work);
  const [companyTel, setCompanyTel] = useState(myCard.company_tel);
  const [companyFax, setCompanyFax] = useState(myCard.company_fax);
  const [userTemperature, setUserTemperature] = useState(
    myCard.user_temperature,
  );
  const [userEmail, setUserEmail] = useState(myCard.user_email);
  const [companyHomepage, setCompanyHomepage] = useState(
    myCard.company_hompage,
  );
  const [companyExp, setCompanyExp] = useState(myCard.company_exp);
  const [modifyDay, setModifyDay] = useState(myCard.modify_day);
  const [modifyTime, setModifyTime] = useState(myCard.modify_time);

  function submitNewMyCardForm() {
    // TODO: update, insert 데이터 다름
    const data = qs.stringify({
      user_unique_num: userUniqueNum,
      card_unique_num: cardUniqueNum,
      favorite_card: favoriteCard,
      company_name: companyName,
      company_image: companyImage,
      company_original_image: companyOriginalImage,
      user_name: userName,
      user_department: userDepartment,
      user_position: userPosition,
      company_tel: companyTel,
      user_phone: userPhone,
      company_fax: companyFax,
      user_email: userEmail,
      company_hompage: companyHomepage,
      company_address: companyAddress,
      company_address2: companyAddress2,
      company_exp: companyExp,
      company_lat: companyLat,
      company_lon: companyLon,
      modify_day: modifyDay,
      modify_time: modifyTime,
      use: use,
      company_work: companyWork,
      user_temperature: userTemperature,
    });

    if (cardUniqueNum) {
      axios
        .post('http://mi07.cafe24.com/bns2022/api/update_my_card.php', data)
        .then(response => {
          props.navigation.navigate('MyCardListScreen', {
            newCardNum: response.data.cardNum,
          });
        })
        .catch(error => console.log(error));
    } else {
      axios
        .post('http://mi07.cafe24.com/bns2022/api/insert_my_card.php', data)
        .then(response => {
          console.log(response.data.data);
          props.navigation.navigate('MyCardListScreen');
        })
        .catch(error => console.log(error));
    }
  }

  return (
    <>
      <View style={styles.brcRootLayout}>
        <View style={styles.header}>
          <Text style={styles.title}>명함 등록</Text>
          <TouchableOpacity
            style={styles.submitNewMyCardFormButton}
            onPress={submitNewMyCardForm}>
            <Text style={styles.submitNewMyCardFormButtonText}>등록</Text>
          </TouchableOpacity>
        </View>
        {/* TODO: Form 분리*/}
        <ScrollView style={styles.otherBackLayout}>
          <Image style={styles.companyImage} source={{uri: companyImage}} />
          <TextInput
            style={styles.inputLayout}
            placeholder="이름"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="부서"
            value={userDepartment}
            onChangeText={text => setUserDepartment(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="상호"
            value={companyName}
            onChangeText={text => setCompanyName(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="직책"
            value={userPosition}
            onChangeText={text => setUserPosition(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="휴대전화"
            value={userPhone}
            onChangeText={text => setUserPhone(text)}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="주소"
            value={companyAddress}
            onChangeText={text => setCompanyAddress}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="상세주소"
            value={companyAddress2}
            onChangeText={text => setCompanyAddress2}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="주요업무"
            value={companyWork}
            onChangeText={text => setCompanyWork}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="일반전화"
            value={companyTel}
            onChangeText={text => setCompanyTel}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="FAX"
            value={companyFax}
            onChangeText={text => setCompanyFax}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="체온"
            value={userTemperature}
            onChangeText={text => setUserTemperature}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="E-mail"
            value={userEmail}
            onChangeText={text => setUserEmail}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="홈페이지 url"
            value={companyHomepage}
            onChangeText={text => setCompanyHomepage}
          />
          <TextInput
            style={styles.inputLayout}
            placeholder="업무소개"
            value={companyExp}
            onChangeText={text => setCompanyExp}
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
  companyImage: {
    width: 100,
    height: 100,
  },
});

export default NewMyCardScreen;

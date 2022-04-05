import {StyleSheet, Text, View} from 'react-native';

const MyCardsScreen = () => {
  return (
    <View style={styles.testConteiner}>
      <Text>테스트</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  testConteiner: {
    backgroundColor: 'powderblue',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MyCardsScreen;

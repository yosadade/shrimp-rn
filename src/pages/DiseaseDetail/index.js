import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {Header, SearchBar, Gap} from '../../components';
import {colors} from '../../utils';

const NewsDetail = ({route}) => {
  const navigation = useNavigation();

  const {id} = route.params;
  const onShare = () => {
    // try {
    //   const result = Share.share({
    //     message: `https://app.jala.tech/posts/${id}`,
    //   });
    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //     } else {
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //   }
    // } catch (error) {
    //   Alert.alert(error.message);
    // }
  };
  return (
    <View style={styles.page}>
      <Header
        title="Info Penyakit"
        onPress={() => navigation.goBack()}
        onShare={onShare}
      />
      <Gap height={16} />
      <SearchBar />
      <Gap height={6} />
      <WebView
        source={{
          uri: `https://app.jala.tech/web_view/diseases/${id}`,
        }}
      />
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
    margin: 12,
    marginBottom: 0,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  wrapper: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapperEditor: {
    flexDirection: 'row',
  },
  titleEdior: {
    fontWeight: 'bold',
  },
  wrapperSosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperShares: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  totalShares: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 15,
  },
  titleShares: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: colors.blue,
  },
  titleContent: {
    fontSize: 18,
    paddingHorizontal: 24,
  },
});

import {StyleSheet, View, Share, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {Header} from '../../components';
import {colors} from '../../utils';

const DiseaseDetail = ({route}) => {
  const navigation = useNavigation();

  const {id} = route.params;
  const options = {
    title: `https://app.jala.tech/posts/${id}`,
    message: `https://app.jala.tech/posts/${id}`,
    url: `https://app.jala.tech/posts/${id}`,
  };
  const onShare = async () => {
    try {
      await Share.share(options);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.page}>
      <Header
        title="Info Penyakit"
        onPress={() => navigation.goBack()}
        onShare={onShare}
      />
      <WebView
        style={styles.content}
        source={{
          uri: `https://app.jala.tech/web_view/diseases/${id}`,
        }}
      />
    </View>
  );
};

export default DiseaseDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
  },
});

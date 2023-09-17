import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PhotosStore} from '@store/Photos';
import {SCREEN_WIDTH} from '@utils/constants';
import {useNavigation} from '@react-navigation/native';

export const PhotosDetail: FC = observer(() => {
  const navigation = useNavigation();
  const item = PhotosStore.selectedPhoto;

  if (!item) {
    return null;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <Text>Back</Text>
        </Pressable>
      </View>
      <View style={styles.imageWrapper}>
        <View
          style={[styles.imagePlaceholder, {backgroundColor: item.avg_color}]}
        />
        <Image
          source={{uri: item.src.medium}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  imageWrapper: {
    overflow: 'hidden',
    position: 'relative',
    flex: 1,
  },
  imagePlaceholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  image: {
    width: SCREEN_WIDTH,
    height: '100%',
  },
});

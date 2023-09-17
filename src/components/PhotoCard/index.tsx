import {Photo} from '@appTypes/photo';
import {SCREEN_WIDTH} from '@utils/constants';
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

interface PhotoCardProps {
  item: Photo;
  onPress?: () => void;
}

export const PhotoCard: FC<PhotoCardProps> = ({item, onPress}) => (
  <Animated.View entering={FadeIn.duration(500)}>
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <View
          style={[styles.imagePlaceholder, {backgroundColor: item.avg_color}]}
        />
        <Image
          source={{uri: item.src.large}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.photographer}
        </Text>
      </View>
    </Pressable>
  </Animated.View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    height: 200,
    margin: 8,
    width: SCREEN_WIDTH / 2 - 16,
  },
  imageWrapper: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  imagePlaceholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  image: {
    height: 130,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
  },
});

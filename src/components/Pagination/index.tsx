import {PhotoRequestMeta} from '@appTypes/request';
import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface IPaginationProps {
  paginationData: PhotoRequestMeta | null;
  onNextPagePress?: () => void;
  onPrevPagePress?: () => void;
}

export const Pagination: FC<IPaginationProps> = ({
  paginationData,
  onNextPagePress,
  onPrevPagePress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        {paginationData?.prev_page && (
          <Pressable onPress={onPrevPagePress}>
            <Text>Prev</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.textWrapper}>
        <Text>{paginationData?.page || 1}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {paginationData?.next_page && (
          <Pressable onPress={onNextPagePress}>
            <Text>Next</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: 40,
  },
});

import {Photo} from '@appTypes/photo';
import {PhotoList} from '@components/PhotoList';
import {useNavigation} from '@react-navigation/native';
import {PhotosStore} from '@store/Photos';
import {observer} from 'mobx-react-lite';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

export const PhotosScreen = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    PhotosStore.loadPhoto();
  }, []);

  const onRefresh = useCallback(() => {
    PhotosStore.loadPhoto(undefined, true);
  }, []);

  const onItemPress = useCallback(
    (item: Photo) => {
      PhotosStore.setSelectedPhoto(item);
      navigation.navigate('photosDetail');
    },
    [navigation],
  );

  return (
    <SafeAreaView>
      <PhotoList
        data={PhotosStore.photos}
        loading={PhotosStore.photosLoading}
        refreshing={PhotosStore.photosRefreshing}
        paginationData={PhotosStore.meta}
        onRefresh={onRefresh}
        onItemPress={onItemPress}
        onNextPage={PhotosStore.nextPage}
        onPrevPage={PhotosStore.prevPage}
      />
    </SafeAreaView>
  );
});

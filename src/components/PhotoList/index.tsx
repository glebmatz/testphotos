import {Photo} from '@appTypes/photo';
import {PhotoRequestMeta} from '@appTypes/request';
import {Pagination} from '@components/Pagination';
import {PhotoCard} from '@components/PhotoCard';
import React, {FC} from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';

interface PhotoListProps {
  data: Photo[];
  loading: boolean;
  refreshing: boolean;
  paginationData: PhotoRequestMeta | null;
  onRefresh?: () => void;
  onItemPress?: (item: Photo) => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
}

export const PhotoList: FC<PhotoListProps> = ({
  data,
  loading,
  refreshing,
  paginationData,
  onRefresh,
  onItemPress,
  onNextPage,
  onPrevPage,
}) => (
  <>
    {loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={
          <Pagination
            paginationData={paginationData}
            onNextPagePress={onNextPage}
            onPrevPagePress={onPrevPage}
          />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <PhotoCard item={item} onPress={() => onItemPress?.(item)} />
        )}
        keyExtractor={item => `${item.id}`}
      />
    )}
  </>
);

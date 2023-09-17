import {apiClient} from './client';
import {PhotoRequest} from '@appTypes/request';

export const getPhotos = async ({pageLink = ''}) => {
  try {
    const result = await apiClient.get<PhotoRequest>(pageLink);

    return result.data;
  } catch (e) {
    console.error(e);
  }
};

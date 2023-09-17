import {Photo} from './photo';

export type PhotoRequestMeta = {
  page: number;
  per_page: number;
  next_page?: string;
  prev_page?: string;
};

export type PhotoRequest = {
  photos: Photo[];
} & PhotoRequestMeta;

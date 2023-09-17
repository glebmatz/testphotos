import {getPhotos} from '@api/photos';
import {Photo} from '@appTypes/photo';
import {PhotoRequestMeta} from '@appTypes/request';
import {PHOTOS_PER_PAGE} from '@utils/constants';
import {makeAutoObservable} from 'mobx';

const FIRST_PAGE_URL = `https://api.pexels.com/v1/curated?per_page=${PHOTOS_PER_PAGE}&page=1`;

class Photos {
  photos: Photo[] = [];
  meta: PhotoRequestMeta | null = null;
  photosLoading = false;
  photosRefreshing = false;
  selectedPhoto: Photo | null = null;
  currentPageLink = FIRST_PAGE_URL;

  constructor() {
    makeAutoObservable(this, undefined, {autoBind: true});
  }

  setSelectedPhoto(photo: Photo | null) {
    this.selectedPhoto = photo;
  }

  async loadPhoto(pageLink?: string, refreshing?: boolean) {
    try {
      if (refreshing) {
        this.photosRefreshing = true;
      } else {
        this.photosLoading = true;
      }

      const result = await getPhotos({
        pageLink: pageLink || this.currentPageLink,
      });

      if (result) {
        if (result.page) {
          this.meta = {
            page: result.page,
            next_page: result.next_page,
            prev_page: result.prev_page,
            per_page: result.per_page,
          };
        }

        if (result.photos) {
          this.photos = result.photos;
        }
      }

      if (pageLink) {
        this.currentPageLink = pageLink;
      }

      if (refreshing) {
        this.photosRefreshing = false;
      } else {
        this.photosLoading = false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  async nextPage() {
    if (this.meta && this.meta.next_page) {
      await this.loadPhoto(this.meta.next_page);
    }
  }

  async prevPage() {
    if (this.meta && this.meta.prev_page) {
      await this.loadPhoto(this.meta.prev_page);
    }
  }
}

export const PhotosStore = new Photos();

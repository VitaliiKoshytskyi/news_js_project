import { axiosNews } from '../axios/axiosDefaults';
import { Notify } from 'notiflix';

class NewsApi {
  #PATH = {
    mostPopular: 'mostpopular/v2//viewed/1.json',
    byKeyWordOrDate: 'search/v2/articlesearch.json',
    byCategory: 'news/v3/content/all/',
    allCategories: 'news/v3/content/section-list.json',
  };

  constructor() {}

  async getMostPopularNews() {
    try {
      const response = await axiosNews.get(this.#PATH.mostPopular);
      return response;
    } catch (error) {
      Notify.failure(error);
    }
  }

  async getNewsByName(params) {
    try {
      const response = await axiosNews.get(this.#PATH.byKeyWordOrDate, {
        params,
      });
      return response;
    } catch (error) {
      Notify.failure(error);
    }
  }

  async getNewsByDate(params) {
    try {
      const response = await axiosNews.get(this.#PATH.byKeyWordOrDate, {
        params,
      });
      return response;
    } catch (error) {
      Notify.failure(error);
    }
  }

  async getNewsByCategory(params) {
    try {
      const response = await axiosNews.get(
        `${this.#PATH.byCategory}${params.category}.json`,
        { params: { limit: params.limit, offset: params.offset } }
      );
      return response;
    } catch (error) {
      Notify.failure(error);
    }
  }

  async getAllCategories() {
    try {
      const response = await axiosNews.get(this.#PATH.allCategories);
      return response;
    } catch (error) {
      Notify.failure(error);
    }
  }
}

export { NewsApi };

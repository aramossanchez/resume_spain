import { news } from '../db/news';

export const getNewsFromApi = async () => {
  return news;
};

export const getNewsByOrganizationFromApi = async (organization: string) => {
  return news.filter((news) => news.organizations.includes(organization));
}
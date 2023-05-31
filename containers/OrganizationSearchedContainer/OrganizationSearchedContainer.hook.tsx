import { getNewsByOrganizationFromApi } from "@/services/NewsList.service";
import { newsDTO } from "@/types/news.type";
import { useEffect, useState } from "react";

export function UseOrganizationSearchedContainer() {
  
  const [organizationToSearch, setOrganizationToSearch] = useState<string>('');
  const [newsList, setNewsList] = useState<newsDTO[]>([]);



  useEffect(() => {
    if(organizationToSearch !== '') {
      getNewsByOrganization();
    }
    // eslint-disable-next-line
  }, [organizationToSearch]);

  const getNewsByOrganization = async () => {
    try {
      const news = await getNewsByOrganizationFromApi(organizationToSearch);
      setNewsList(news);
    } catch (error) {
      console.error(error);
    }
  };

  return { organizationToSearch, setOrganizationToSearch, newsList };
}
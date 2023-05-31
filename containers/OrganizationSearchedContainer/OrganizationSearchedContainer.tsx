'use client';

import { useEffect } from "react";
import { UseOrganizationSearchedContainer } from "./OrganizationSearchedContainer.hook";
import NewsList from "../../components/NewsList/NewsList";

export default function OrganizationSearchedContainer({ organization }: { organization: string }) {

  const { organizationToSearch, setOrganizationToSearch, newsList } = UseOrganizationSearchedContainer();

  useEffect(() => {
    setOrganizationToSearch(decodeURI(organization));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
    <h1 className="font-bold text-4xl w-full text-center my-8">Noticias sobre {organizationToSearch}</h1>
      <NewsList newsList={newsList} />
    </div>
  )
}
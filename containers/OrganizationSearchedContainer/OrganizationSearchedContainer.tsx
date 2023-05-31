'use client';

import { useEffect } from "react";
import { UseOrganizationSearchedContainer } from "./OrganizationSearchedContainer.hook";

export default function OrganizationSearchedContainer({ organization }: { organization: string }) {

  const { organizationToSearch, setOrganizationToSearch, newsList } = UseOrganizationSearchedContainer();

  useEffect(() => {
    setOrganizationToSearch(decodeURI(organization));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {newsList.map((news, index) => {
        return (
          <span key={index}>{news.title}</span>
        )
      })}
    </div>
  )
}
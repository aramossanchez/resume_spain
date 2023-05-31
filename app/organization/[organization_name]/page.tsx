import OrganizationSearchedContainer from '@/containers/OrganizationSearchedContainer/OrganizationSearchedContainer';

export const dynamic = 'force-dynamic';

export default function OrganizationSearched( {params}: {params: {organization_name: string}}) {

  return (
    <main>
      <OrganizationSearchedContainer organization={params.organization_name}/>
    </main>
  )
}

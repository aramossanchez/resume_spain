export type newsDTO = {
    title: string,
    link: string,
    organizations: string[],
    provincia: string,
    municipio?: string,
    date: string,
    tags: string[],
    fakeNew: {
      state: string,
      link: string
    }
  }
  
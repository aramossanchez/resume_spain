import { useEffect, useState } from "react";
import { getProvinciasFromApi } from "../../services/ProvinciasList.service";

export function UseHeader() {

  useEffect(() => {
    getProvincias();
    // eslint-disable-next-line
  }, []);

  const [provinciasList, setProvinciasList] = useState<string[]>([]);

  const getProvincias = async () => {
    try {
      const provincias = await getProvinciasFromApi();
      setProvinciasList(provincias);
    } catch (error) {
      console.error(error);
    }
  };

  return { provinciasList };

}

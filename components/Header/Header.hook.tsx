import { useEffect, useState } from "react";
import { getProvinciasFromApi } from "../../services/ProvinciasList.service";
import { getAutonomiasFromApi } from "@/services/AutonomiasList.service";

export function UseHeader() {

  useEffect(() => {
    getProvincias();
    getAutonomias();
    // eslint-disable-next-line
  }, []);

  const [provinciasList, setProvinciasList] = useState<string[]>([]);
  const [autonomiasList, setAutonomiasList] = useState<string[]>([]);

  const getProvincias = async () => {
    try {
      const provincias = await getProvinciasFromApi();
      setProvinciasList(provincias);
    } catch (error) {
      console.error(error);
    }
  };

  const getAutonomias = async () => {
    try {
      const autonomias = await getAutonomiasFromApi();
      setAutonomiasList(autonomias);
    } catch (error) {
      console.error(error);
    }
  };

  return { provinciasList, autonomiasList };

}

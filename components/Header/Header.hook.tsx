import { useEffect, useState } from "react";
import { getProvinciasFromApi } from "../../services/ProvinciasList.service";
import { getAutonomiasFromApi } from "@/services/AutonomiasList.service";
import { getMediosFromApi } from "@/services/MediosList.service";

export function UseHeader() {

  useEffect(() => {
    getProvincias();
    getAutonomias();
    getMedios();
    // eslint-disable-next-line
  }, []);

  const [provinciasList, setProvinciasList] = useState<string[]>([]);
  const [autonomiasList, setAutonomiasList] = useState<string[]>([]);
  const [mediosList, setMediosList] = useState<string[]>([]);

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

  const getMedios = async () => {
    try {
      const medios = await getMediosFromApi();
      setMediosList(medios);
    } catch (error) {
      console.error(error);
    }
  };

  return { provinciasList, autonomiasList, mediosList };

}

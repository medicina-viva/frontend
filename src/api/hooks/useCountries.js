import { useCallback } from "react";
import { fetchAddressByCep, fetchCountries } from "../services/country-service";

export const useCountries = () => {
  const getCountries = useCallback(async () => {
    return await fetchCountries();
  }, []);

  const getAddressByCep = useCallback(async () => {
    return await fetchAddressByCep();
  }, []);
  return { getCountries, getAddressByCep };
};

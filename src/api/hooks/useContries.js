import { useCallback } from "react";
import { fetchAddressByCep, fetchCountries } from "../services/address-service";

export const useCountries = () => {
	const getCountries = useCallback(() => {
		return fetchCountries();
	}, []);

	const getAddressByCep = async (cepNumber) => {
		return await fetchAddressByCep(cepNumber);
	};
	return { getCountries, getAddressByCep };
};

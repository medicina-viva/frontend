import axios from "axios";
import countries from "./data/contries";

export const fetchCountries = () => {
	return countries;
};

export const fetchAddressByCep = async (cepNumber) => {
	try {
		const BASE_URL = "https://api.postmon.com.br/v1/cep";
		const { status, data } = await axios.get(`${BASE_URL}/${cepNumber}`);
		return {
			code: status,
			state: data.estado,
			city: data.cidade,
			neighborhood: data.bairro,
			street: data.logradouro,
		};
	} catch (error) {
		return { code: error.status };
	}
};

import { useCallback } from "react";
import { fetchConsultations } from "../services/consultation-service";

export const useConsultations= () => {
  const getConsulatations = useCallback(() => {
    return fetchConsultations();
  }, []);

  return { getConsulatations };
};

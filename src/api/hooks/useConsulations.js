import { useCallback } from "react";
import {
  fetchConsultations,
  fetchSchedules,
} from "../services/consultation-service";

export const useConsultations = () => {
  const getConsultations = useCallback(async () => {
    return await fetchConsultations();
  }, []);

  const getSchedules = useCallback(async () => {
    return await fetchSchedules();
  }, []);

  return { getConsultations, getSchedules };
};

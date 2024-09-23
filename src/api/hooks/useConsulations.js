import { useCallback } from "react";
import {
  fetchConsultations,
  fetchSchedules,
} from "../services/consultation-service";

export const useConsultations = () => {
  const getConsultations = useCallback(() => {
    return fetchConsultations();
  }, []);

  const getSchedules = useCallback(() => {
    return fetchSchedules();
  }, []);

  return { getConsultations, getSchedules };
};

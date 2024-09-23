import { Box, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { useEffect, useState } from "react";
import { useConsultations } from "../../../api/hooks/useConsulations";
import RenderConsultationTable from "../../../utils/render-patient-consultation-table";
import RenderScheduleModal from "../../../utils/render-patient-schedule-modal";

const PatientConsultation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [schedules, setSchedules] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const { getConsultations, getSchedules } = useConsultations();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedulesData = await getSchedules();
        const consultationsData = await getConsultations();
        setSchedules(schedulesData);
        setConsultations(consultationsData);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, [getSchedules, getConsultations]);

  return (
    <Box width="100%" padding="20px" display="flex" flexDirection="column">
      <Button
        onClick={handleOpen}
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-around",
          textDecoration: "none",
          backgroundColor: isHovered
            ? colors.secondary.default
            : colors.primary.default,
          color: "#fff",
          padding: "20px",
          borderRadius: "3px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AddCircleIcon></AddCircleIcon> Agendar Consulta
      </Button>
      <RenderScheduleModal
        open={open}
        handleClose={handleClose}
        schedules={schedules}
      />
      <RenderConsultationTable consultations={consultations} />
    </Box>
  );
};

export default PatientConsultation;

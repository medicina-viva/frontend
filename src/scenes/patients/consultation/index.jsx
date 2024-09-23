import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useConsultations } from "../../../api/hooks/useConsulations";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicModal from "../../../components/modal";

const PatientConsultation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getConsultations, getSchedules } = useConsultations();
  const consultations = getConsultations();
  const schedules = getSchedules();

  const [expandedDoctors, setExpandedDoctors] = useState({});
  const [expandedSpecialties, setExpandedSpecialties] = useState({});
  const [expandedDates, setExpandedDates] = useState({});

  const toggleDoctor = (doctorName) => {
    setExpandedDoctors((prev) => ({
      ...prev,
      [doctorName]: !prev[doctorName],
    }));
  };

  const toggleSpecialty = (doctorName, specialty) => {
    setExpandedSpecialties((prev) => ({
      ...prev,
      [`${doctorName}-${specialty}`]: !prev[`${doctorName}-${specialty}`],
    }));
  };

  const toggleDate = (doctorName, specialty, date) => {
    setExpandedDates((prev) => ({
      ...prev,
      [`${doctorName}-${specialty}-${date}`]:
        !prev[`${doctorName}-${specialty}-${date}`],
    }));
  };

  const renderScheduleList = () => {
    return schedules.map((doctor, index) => {
      const isDoctorExpanded = expandedDoctors[doctor.doctorName] || false;

      return (
        <Box
          key={doctor.doctorName}
          sx={{
            marginBottom: "24px",
            padding: "10px",
            backgroundColor: colors.primary[700],
            borderRadius: "4px",
            color: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "16px",
              cursor: "pointer",
            }}
            onClick={() => toggleDoctor(doctor.doctorName)}
          >
            Médico: {doctor.doctorName}
          </Typography>

          <Collapse in={isDoctorExpanded}>
            {doctor.schedules
              .reduce((acc, { specialty, date, availableHours, id }) => {
                const specialtyData = acc.find(
                  (item) => item.specialty === specialty
                );
                if (specialtyData) {
                  specialtyData.dates.push({ date, availableHours, id });
                } else {
                  acc.push({
                    specialty,
                    dates: [{ date, availableHours, id }],
                  });
                }
                return acc;
              }, [])
              .map(({ specialty, dates }) => {
                const isSpecialtyExpanded =
                  expandedSpecialties[`${doctor.doctorName}-${specialty}`] ||
                  false;

                return (
                  <Box
                    key={specialty}
                    sx={{ marginLeft: "20px", marginBottom: "16px" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ marginBottom: "8px", cursor: "pointer" }}
                      onClick={() =>
                        toggleSpecialty(doctor.doctorName, specialty)
                      }
                    >
                      Especialidade: {specialty}
                    </Typography>

                    <Collapse in={isSpecialtyExpanded}>
                      {dates.map(({ date, availableHours, id }) => {
                        const isDateExpanded =
                          expandedDates[
                            `${doctor.doctorName}-${specialty}-${date}`
                          ] || false;

                        return (
                          <Box
                            key={date}
                            sx={{ marginLeft: "20px", marginBottom: "8px" }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ marginBottom: "4px", cursor: "pointer" }}
                              onClick={() =>
                                toggleDate(doctor.doctorName, specialty, date)
                              }
                            >
                              Dia: {date}
                            </Typography>

                            <Collapse in={isDateExpanded}>
                              <Typography
                                variant="body1"
                                sx={{ marginLeft: "20px", marginTop: "4px" }}
                              >
                                Horas Disponíveis:
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 1,
                                  marginLeft: "40px",
                                }}
                              >
                                {availableHours.map((hour, hourIndex) => (
                                  <Button
                                    key={hourIndex}
                                    color="success"
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                      handleHourClick(
                                        hour,
                                        date,
                                        doctor.doctorName,
                                        specialty,
                                        id
                                      )
                                    }
                                    sx={{ margin: "2px" }}
                                  >
                                    {hour}
                                  </Button>
                                ))}
                              </Box>
                            </Collapse>
                          </Box>
                        );
                      })}
                    </Collapse>
                  </Box>
                );
              })}
          </Collapse>
        </Box>
      );
    });
  };

  // Função para lidar com o clique no botão
  const handleHourClick = (hour, date, doctorName, specialty, id) => {
    console.log("Código da Agenda:", id);
    console.log("Hora clicada:", hour);
    console.log("Dia clicado:", date);
    console.log("Médico clicado:", doctorName);
    console.log("Especialidade clicada:", specialty);
  };

  const consultationColumns = [
    { field: "id", headerName: "Cídigo da Consulta", flex: 1, align: "left" },
    {
      field: "doctorName",
      headerName: "Nome do Médico",
      flex: 1,
      align: "left",
    },
    {
      field: "specialty",
      headerName: "Especialidade",
      flex: 1,
      align: "left",
    },
    {
      field: "dateTime",
      headerName: "Date e Hora",
      flex: 1,
      align: "left",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box width="100%" display="flex" justifyContent="flex-start">
            <IconButton
              sx={{
                color: "#fff",
                marginRight: "3px",
                borderRadius: "3px",
                backgroundColor: "#2E7D32",
                "&:hover": {
                  backgroundColor: `${colors.secondary.default}`,
                },
              }}
            >
              <VisibilityIcon />
            </IconButton>

            {params.row.status !== "Finalizada" && (
              <IconButton
                sx={{
                  color: "#fff",
                  borderRadius: "3px",
                  backgroundColor: "#d32f2f",
                  "&:hover": {
                    backgroundColor: `${colors.secondary.default}`,
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
        );
      },
    },
  ];

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

      <BasicModal
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "3px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "70%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        open={open}
        handleClose={handleClose}
      >
        <h1>Agendar Consulta</h1>
        {renderScheduleList()}
      </BasicModal>

      <Box
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            marginTop: "10px",
            border: "none",
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "#fff",
            borderBottom: "none",
            backgroundColor: colors.primary.default,
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#fff",
          },
          "& .MuiDataGrid-footerContainer": {
            color: "#fff !important",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.text.primary} !important`,
          },
        }}
      >
        <DataGrid
          rows={consultations}
          columns={consultationColumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PatientConsultation;

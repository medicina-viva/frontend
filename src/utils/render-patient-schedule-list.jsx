import { useTheme } from "@emotion/react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme";

const RenderScheduleList = ({ schedules }) => {
  console.log(schedules);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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

  const handleHourClick = (hour, date, doctorName, specialty, id) => {
    console.log("Código da Agenda:", id);
    console.log("Hora clicada:", hour);
    console.log("Dia clicado:", date);
    console.log("Médico clicado:", doctorName);
    console.log("Especialidade clicada:", specialty);
  };

  return schedules.map((doctor) => {
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

export default RenderScheduleList;

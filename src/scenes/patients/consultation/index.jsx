import { Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { useState } from "react";
import { DataGrid, GridToolbar, renderActionsCell } from "@mui/x-data-grid";
import { useConsultations } from "../../../api/hooks/useConsulations";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { alignProperty } from "@mui/material/styles/cssUtils";

const PatientConsultation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  const { getConsulatations } = useConsultations();
  const consultations = getConsulatations();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, align: "center" },
    {
      field: "doctorName",
      headerName: "Doctor Name",
      flex: 1,
      align: "center",
    },
    {
      field: "specialty",
      headerName: "Especialidade",
      flex: 1,
      align: "center",
    },
    {
      field: "startTime",
      headerName: "Hora",
      flex: 1,
      align: "center",
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
      <Link
        to="/patients/consultations/schedule/"
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
      </Link>
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
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PatientConsultation;

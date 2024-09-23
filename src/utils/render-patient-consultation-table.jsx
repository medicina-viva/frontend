import { useTheme } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const RenderConsultationTable = ({ consultations }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
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
  );
};

export default RenderConsultationTable;

import BasicModal from "../components/modal";
import RenderScheduleList from "./render-patient-schedule-list";

const RenderScheduleModal = ({ open, handleClose, schedules }) => {
  return (
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
      <RenderScheduleList schedules={schedules} />
    </BasicModal>
  );
};

export default RenderScheduleModal;

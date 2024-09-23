import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BasicModal = ({ children, open, handleClose, sx }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {}} // Impede que o modal feche ao clicar fora
      >
        <Box sx={sx}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;

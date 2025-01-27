import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from '@mui/material/TextField';
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

function EditDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="responsive-dialog-title">{"Edit Text"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Edit Text"
            type="text"
            fullWidth
            multiline
            rows={5} 
            // value={editText}
            // onChange={(e) => seteditText(e.target.value)}
          />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

EditDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default EditDialog;

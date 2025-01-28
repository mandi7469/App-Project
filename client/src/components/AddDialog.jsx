import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useUserContext } from "../../utils/userContext";
import { useState } from "react";
// import { UPDATE_EDIT_TEXT } from "../../utils/actions";

function AddDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [state, dispatch] = useUserContext();
  const { userEntry } = state;
  const [editText, setEditText] = useState();

//   const handleEdit = () => {
//     dispatch({
//       type: UPDATE_EDIT_TEXT,
//       userEntry: editText,
//     });
//     handleClose();
//   };

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
        <DialogTitle id="responsive-dialog-title">{"Entry"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="userEntry"
              // label="Edit Text"
              type="text"
              fullWidth
              multiline
              rows={5}
            //   defaultValue={userEntry}
            //   onChange={(e) => setEditText(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained"  autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

AddDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AddDialog;

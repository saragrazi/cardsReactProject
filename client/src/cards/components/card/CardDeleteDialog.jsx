import React from "react";
import { bool, func } from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const CardDeleteDialog = ({isDialogOpen, onDelete, onChangeDialog})=>{
    return(
<Dialog
open = {isDialogOpen}
onClose = {onChangeDialog}
aria-labelledby = "alert-dialog-title"
describedby = "alert-dialog-description"
maxWidth ="xs">
    <DialogTitle id="alert-dialog-title">
{"Are you sure you want to delete this card?"}
    </DialogTitle>
    <DialogContent>
        <DialogContentText id="alert-dialog-description">
operation will completely delete the buisness card  and all its data from the database and it will not be possible to retrieve the card afterwards
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <button onClick={onChangeDialog} color="red">
            cancel
        </button>
        <button onClick={onDelete} autoFocus color="info">
            delete card
        </button>
    </DialogActions>
</Dialog>
    );
};

CardDeleteDialog.propTypes = {
isDialogOpen: bool.isRequired,
onChangeDialog: func.isRequired,
onDelete: func.isRequired
}

export default CardDeleteDialog;
import React from "react";
import {
  Typography,
  IconButton,
} from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
    root: {
          margin: 0,
          padding: '20px',
          backgroundColor: theme.palette.secondary.main,
          textAlign: 'center'
         
      },
      title: {
          color: '#f1f1f1',
          textTransform: 'uppercase'
      },
    closeButton: {
      position: "absolute",
      right: 0,
      top: 0,
      color: "#f1f1f1"
    }
  });

const DialogTitle = withStyles( styles )( ( { children, onClose, classes, ...other } ) =>
{
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" className={classes.title}>{children}</Typography>
                <IconButton
                    size="small"
                 aria-label="close"
                 className={classes.closeButton}
                 onClick={onClose}
               >
            <CloseIcon />
          </IconButton>
      </MuiDialogTitle>
    );
} );
  
export default DialogTitle;
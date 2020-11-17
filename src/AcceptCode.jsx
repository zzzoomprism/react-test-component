import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, Grid, Slide } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import ReactInputVerificationCode from "react-input-verification-code";

import DialogTitle from "./shared/DialogTitle";
import Icon from "./SVG";

const BUTTON_ELEMENTS_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const VERIFY_CODE_LENGTH = 4;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AcceptCode = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [code, setCode] = useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleEvent = (value) => {
        if (code.length < VERIFY_CODE_LENGTH)
            setCode(code + value.toString());
    }
    const handleVerify = () => {
        if (code.length === 4) {
            alert('Good');
            setIsOpen(false);
        } else
            alert('Please enter code');
    }
    return (
        <Box>
            {console.log(code)}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsOpen(true)}
            >
                Open Pop up
            </Button>
            <Dialog
                fullScreen={fullScreen}
                fullWidth
                maxWidth={'sm'}
                open={isOpen}
                TransitionComponent={Transition}
                onClose={() => setIsOpen(false)}
            >
                <DialogTitle onClose={() => setIsOpen(!isOpen)}>
                    Verify by phone number
                </DialogTitle>
                <DialogContent>
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="center">
                        <Grid item xs={6}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Icon name="fingerprint" size={270} color="#8bc34a"/>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box mt={5} className="verify-code">
                                <ReactInputVerificationCode placeholder="" value={code} onChange={(value) => {
                                    setCode(value)
                                }}/>
                            </Box>
                            <Grid container item
                                  spacing={1}
                                  direction="row"
                                  justify="center"
                                  alignItems="center">
                                {
                                    BUTTON_ELEMENTS_LIST.map((el) => (
                                            <Grid key={el} item xs={4}>
                                                <Button fullWidth variant="contained" color="primary"
                                                        onClick={() => handleEvent(el)}>{el}</Button>
                                            </Grid>
                                        )
                                    )
                                }
                                <Box width="0%">
                                    <Button size="small" onClick={() => setCode(code.slice(0, -1))}>
                                        <BackspaceOutlinedIcon fontSize="small"/>
                                    </Button>
                                </Box>
                            </Grid>
                            <Box mt={2}>
                                <Button fullWidth variant="contained" color="secondary" onClick={handleVerify}>Verify</Button>
                            </Box>
                            <Box mt={2} pb={3}>
                                <Button fullWidth variant="contained" color="primary" onClick={() => setCode("")}>Resend code</Button>
                            </Box>

                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default AcceptCode;

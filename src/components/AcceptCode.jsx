import React, {memo} from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slide,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import ReactInputVerificationCode from 'react-input-verification-code';
import PropTypes from 'prop-types';

import DialogTitle from '../shared/DialogTitle';
import Icon from './Icon';

const BUTTON_ELEMENTS_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AcceptCode = memo(({
  popUpIsOpen,
  verify,
  buttonClick,
  openPopup,
  closePopup,
  code,
  setCodeValue,
}) => {
  console.log(popUpIsOpen);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {console.log(popUpIsOpen)}
      <Button variant="contained" color="secondary" onClick={openPopup}>
        Open Pop up
      </Button>
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth={'sm'}
        open={popUpIsOpen}
        TransitionComponent={Transition}
        onClose={closePopup}
      >
        <DialogTitle onClose={closePopup}>Verify by phone number</DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Icon name="fingerprint" size={270} color="#8bc34a" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box mt={5} className="verify-code">
                <ReactInputVerificationCode
                  placeholder=""
                  value={code}
                  onChange={value => {
                    setCodeValue(value);
                  }}
                />
              </Box>
              <Grid
                container
                item
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
              >
                {BUTTON_ELEMENTS_LIST.map(el => (
                  <Grid key={el} item xs={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => buttonClick(el)}
                    >
                      {el}
                    </Button>
                  </Grid>
                ))}
                <Box width="0%">
                  <Button
                    size="small"
                    onClick={() => setCodeValue(code.slice(0, -1))}
                  >
                    <BackspaceOutlinedIcon fontSize="small" />
                  </Button>
                </Box>
              </Grid>
              <Box mt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={verify}
                >
                  Verify
                </Button>
              </Box>
              <Box mt={2} pb={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => setCodeValue('')}
                >
                  Resend code
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
});

AcceptCode.propTypes = {
  popUpIsOpen: PropTypes.bool,
  verify: PropTypes.func,
  buttonClick: PropTypes.func,
  openPopup: PropTypes.func,
  closePopup: PropTypes.func,
  code: PropTypes.string,
  setCodeValue: PropTypes.func,
};

export default AcceptCode;

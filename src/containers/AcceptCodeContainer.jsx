import React, { useCallback, useState } from 'react';
import AcceptCode from '../components/AcceptCode';

const VERIFY_CODE_LENGTH = 4;

const AcceptCodeContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');

  const handleEvent = useCallback(
    value => {
      if (code.length < VERIFY_CODE_LENGTH) setCode(code + value.toString());
    },
    [code],
  );

  const handleVerify = useCallback(() => {
    if (code.length === 4) {
      alert('Good');
      setIsOpen(false);
    } else alert('Please enter code');
  }, [code]);

  const handleOpen = () => {
    setIsOpen(true);
    console.log('open');
  };
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setCodeValue = useCallback(value => setCode(value), []);

  return (
    <AcceptCode
      popUpIsOpen={isOpen}
      verify={handleVerify}
      buttonClick={handleEvent}
      openPopup={() => handleOpen()}
      closePopup={handleClose}
      code={code}
      setCodeValue={setCodeValue}
    />
  );
};

export default AcceptCodeContainer;

// components/CopyPhoneNumber.jsx

import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import copy from 'clipboard-copy';

const CopyPhoneNumber = ({ phoneNumber }) => {
  const [isSnackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleCopyClick = () => {
    copy(phoneNumber);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Button
        size="small"
        color="primary"
        startIcon={<FileCopy />}
        onClick={handleCopyClick}
      >
      </Button>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Phone number copied to clipboard!"
      />
    </>
  );
};

export default CopyPhoneNumber;

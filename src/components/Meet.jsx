import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      sx={{
        marginTop: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        sx={{
          height: '75px',
          width: '100%',
          maxWidth: '378px',
          borderRadius: '15px',
          color: '#6C5FBC',
          border: 'solid 2px #6C5FBC',
          fontSize: '18px',
          fontWeight: '500',
        }}
        value="Food"
      >
        Web
      </ToggleButton>
      <ToggleButton
        sx={{
          height: '75px',
          width: '100%',
          maxWidth: '378px',
          borderRadius: '15px',
          color: '#6C5FBC',
          border: 'solid 2px #6C5FBC',
          fontSize: '18px',
          fontWeight: '500',
        }}
        value="Resturent"
      >
        Android
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

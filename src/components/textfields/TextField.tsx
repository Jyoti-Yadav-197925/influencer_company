import { styled,TextField  } from '@mui/material'
export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused': {
        boxShadow: 'none', // Remove blue background and outline
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
    },
  
    },
    
    borderRadius: '8px',
  }));

  export const PaymentTextField = styled(TextField)({
    width: '50%', // Set width to 50%
    height: '100%', // Set height to full
    '& .MuiInput-underline:before': {
      borderBottom: 'none', // No bottom border
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none', // No bottom border on focus
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'SF Pro Display', // Custom font family
      fontWeight: 500, // Custom font weight
      fontSize: '30px', // Custom font size
      lineHeight: '35.8px', // Custom line height
      letterSpacing: '0.175px', // Custom letter spacing
      textAlign: 'left', // Align label text to the left
    },
    // Ensure the input area takes full height
    '& .MuiInputBase-root': {
      height: '100%', // Full height for the input field
      display: 'flex', // Make sure input grows to full height
      alignItems: 'center', // Vertically center text within input
      fontFamily: 'SF Pro Display', // Apply same font to input text
      fontSize: '30px', // Apply same font size to input text
      fontWeight: 500, // Apply same font weight
      lineHeight: '35.8px', // Set line height
      letterSpacing: '0.175px', // Set letter spacing
      textAlign: 'left', // Align text to the left within the input
    },
    // Remove underline border on hover and focus
    '&:hover .MuiInput-underline:before': {
      borderBottom: 'none', // No underline on hover
    },
    '&.Mui-focused .MuiInput-underline:before': {
      borderBottom: 'none', // No underline on focus
    },
  });
  
  
  
// Importent imports file
import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
// import { CustomTextField } from '../../components/textfields/TextField.tsx';
// import { BootstrapButton } from '../../components/buttons/Buttons.tsx';
import { Profilestyles } from '../Profile/style/Style.js';
import { BootstrapButton } from '../../components/comon/Buttons/Buttons.tsx';
import { PaymentTextField } from '../../components/textfields/TextField.tsx';
import { payment, paytym, phonePay, GPay, AddCard } from '../../assets.jsx';
function PaymentScreen() {
    return (
        <>
            <Box style={Profilestyles.container}>
                <Grid container spacing={0} style={Profilestyles.gridContainer}
                    size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                        <Box sx={{ padding: 2, width: '100%' }}>
                            <Box sx={{
                                display: 'flex', flexDirection:
                                    'column', width: '100%', height: '90vh',
                                justifyContent: 'space-between',
                            }}>
                                <Box sx={{
                                    width: '100%', justifyContent: 'center',
                                    display: 'flex', alignItems: 'center'
                                }}>
                                    <span className="flex flex-row w-[70%]  border-b border-[#1ABC9C] p-2 items-center justify-between">
                                        <label className="color-[#50506F] text-white font-sf-pro-display font-medium text-[30px] p-1"><p className="text-[#50506F]">Total Price</p>
                                        </label>
                                        <PaymentTextField variant="standard" sx={{width:'60%',height:'3rem'}} />
                                    </span>
                                </Box>

                                <Stack spacing={5} sx={{
                                }} direction="column"
                                    alignItems="center">

                                    <div className='w-[70%]  flex flex-col items-center justify-center  '>
                                        <Typography variant='h5'
                                            sx={{

                                                width: '100%',
                                                textAlign: 'left',  // Align text to the left
                                                color: 'black',
                                                paddingLeft: '1rem'    // Set text color to black
                                            }}
                                        >
                                            UPI
                                        </Typography>
                                        <div class=" rounded-[1rem] border border-[#E2E2E2]   w-[100%]  flex flex-col">
                                            <Stack spacing={1}>


                                                <div class="flex flex-row items-center justify-between p-2">
                                                    <div class="flex items-center">
                                                        <img src={paytym} alt="Payment Icon" class="h-8 w-8 rounded-full mr-2" />
                                                        <span class="text-lg font-medium">Google Pay</span>
                                                    </div>
                                                    <input type="radio" name="paymentOption" value="option1" />
                                                </div>
                                                <hr class="border border-[#B9B9B9]" />

                                                <div class="flex flex-row items-center justify-between p-2">
                                                    <div class="flex items-center">
                                                        <img src={phonePay} alt="Payment Icon" class="h-8 w-8 rounded-full mr-2" />
                                                        <span class="text-lg font-medium">PhonePe UPI</span>
                                                    </div>
                                                    <input type="radio" name="paymentOption" value="option2" />
                                                </div>
                                                <hr class="border border-[#B9B9B9]" />

                                                <div class="flex flex-row items-center justify-between p-2">
                                                    <div class="flex items-center">
                                                        <img src={GPay} alt="Payment Icon" class="h-8 w-8 rounded-full mr-2" />
                                                        <span class="text-lg font-medium">Paytm UPI</span>
                                                    </div>
                                                    <input type="radio" name="paymentOption" value="option3" />
                                                </div>
                                            </Stack>
                                        </div>

                                    </div>
                                    <div className='w-[70%]  flex flex-col items-center justify-center  '>
                                        <Typography variant='h5'
                                            sx={{

                                                width: '100%',
                                                textAlign: 'left',  // Align text to the left
                                                color: 'black',
                                                paddingLeft: '1rem'    // Set text color to black
                                            }}
                                        >
                                            Credit & Debit Cards
                                        </Typography>
                                        <div class=" rounded-[1rem] border border-[#E2E2E2]   w-[100%]  flex flex-col">
                                            <div class="w-full h-[5rem] flex flex-row items-center  pl-8">
                                                <div class="w-[4rem] h-[2rem] flex items-center justify-center">
                                                    <img src={AddCard} alt="Image" class="w-full h-full object-cover" />
                                                </div>

                                                <div class="flex flex-col justify-center ml-5">
                                                    <span class="text-lg font-bold"><p className='text-[#1ABC9C]'>Add New Card</p></span>
                                                    <span class="text-sm text-gray-500">Save and Pay via Cards.</span>
                                                </div>
                                            </div>

                                        </div>
                                        

                                    </div>


                                    <BootstrapButton>Pay</BootstrapButton>




                                </Stack>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                        sx={{ display: { xs: 'none', sm: 'none', md: 'block', } }}>
                        <Box sx={{ width: '100%', height: '100vh' }}>
                            <img src={payment} alt='right'
                                style={{
                                    width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5rem'  // Cover the box while maintaining aspect ratio
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PaymentScreen

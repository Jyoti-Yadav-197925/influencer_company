import React from 'react'
import { Grid2, Typography,Box,Stack,Button } from '@mui/material'

import { InstaG,StoryG,Facewash,ImageIcon,ReelG } from '../../assets'
import { useState } from 'react'


function ViewDetails() {
  const [accept ,setAccept] = useState(null)
  return (
    <>
    <Box
      sx={{
        width: '100%',
        height:'5rem', // Full width
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Bottom shadow
        padding: '1rem', // Optional padding for content
        backgroundColor: 'white', // Optional background color
        display: 'flex',
        alignItems: 'center', // Center vertically
      }}
    >
      <Typography  variant='h5'
        sx={{
          fontWeight: 'bold', // Bold text
          marginLeft: '10rem', // Align left
          flexGrow: 1,
          fontFamily: 'Poppins, Roboto, Arial, sans-serif',
          fontStyle:'' // Take full width within the Box
        }}
      >
        Details
      </Typography>
    </Box>
   <Box sx={{height:'100vh',
    paddingLeft:'10rem',
    paddingRight:'10rem',
    paddingTop:'5rem',
    marginBottom:'5rem'
   }}>
    <Grid2 columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
    <Stack spacing={3}>
      
       <Box
       sx={{
        // backgroundColor:'black',
        width: '100%',
        borderRadius: '1rem', 
        border: '1px solid ',  // Transparent to show gradient
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center',
        borderTop: '2px solid #0cf5cd',
        borderRight: '2px solid #0cf5cd',  // Gradient border
         }}
     
       >
         <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={ImageIcon} alt=''/>
           </Box>
             <Box sx={{display:'flex',
              justifyContent:'space-between',
              height:'4rem',
              flexDirection:'column',
              marginLeft:'1rem'}}>
                
               <Typography variant='h5' align='left' sx={{fontWeight:'500',fontFamily: 'Poppins, Lato, Roboto, Arial, sans-serif',}}>Organizer </Typography>
               <Typography align='left' sx={{fontFamily: 'Poppins, Lato, Roboto, Arial, sans-serif'}}>Organizer@gmia.com</Typography>
             </Box>
          </Box>
           <Box>
               <Typography variant='h5'sx={{fontWeight:'500',fontFamily: 'Poppins, Lato, Roboto, Arial, sans-serif'}}>Offer $279</Typography>
           </Box>
       </Box>
       

       <Stack spacing={2}>
          <Typography variant='h4' align='left' 
          sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}> 
            Service Details</Typography>
          <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        border:'1px solid gray',
        display:'flex',
        flexDirection:'column',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center',
         borderTop: '2px solid #0cf5cd',
         borderRight: '2px solid #0cf5cd', 
        borderRadius: '1rem', 
         
       }}> 
        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={InstaG} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem',width:'20rem'}
            }>
            <Typography  variant='h5' align='left' sx={{fontWeight:'500', fontFamily: 'Roboto, Arial, sans-serif'}}>Post </Typography>
            <Typography variant='body2' color='gray' sx={{fontWeight:'400',fontFamily: 'Poppins, Arial, sans-serif'}}>2 post with the products and how to use product with body2 and promo code</Typography>
            </Box>
                
        </Box>
           <Box>
               <Typography variant='h5'sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>$100</Typography>
    
           </Box>
        </Box>
        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={ReelG} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem',width:'20rem'}
            }>
               <Typography  variant='h5' align='left' sx={{fontWeight:'500', fontFamily: 'Roboto, Arial, sans-serif'}}>Post </Typography>
               <Typography variant='body2' color='gray' sx={{fontWeight:'400',fontFamily: 'Poppins, Arial, sans-serif'}}>2 post with the products and how to use product with body2 and promo code</Typography>
                
            </Box>
                
        </Box>
           <Box>
           <Typography variant='h5'sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>$100</Typography>
      
           </Box>
        </Box>

        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={StoryG} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem',width:'20rem'}
            }>
             <Typography  variant='h5' align='left' sx={{fontWeight:'500', fontFamily: 'Roboto, Arial, sans-serif'}}>Post </Typography>
             <Typography variant='body2' color='gray' sx={{fontWeight:'400',fontFamily: 'Poppins, Arial, sans-serif'}}>2 post with the products and how to use product with body2 and promo code</Typography>
            </Box>
                
        </Box>
           <Box>
           <Typography variant='h5'sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>$100</Typography>
    
           </Box>
        </Box>

          </Box>
       </Stack>
      
      <Stack spacing={2}>
      <Typography variant='h4' align='left' 
      sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>Product Name and Photo</Typography>
         <Box 
         sx={{
        // backgroundColor:'black',
        width:'100%',
        border:'1px solid gray',
        display:'flex',
        flexDirection:'column',
         justifyContent:'space-between',
        //  padding:'2rem',
         alignItems:'center',
         borderTop: '2px solid #0cf5cd',
         borderRight: '2px solid #0cf5cd', 
        borderRadius: '1rem', 
         
       }}> 
        {/* <Stack spacing={1}> */}
        <Box sx={{width:'78%', padding:'1rem'}}>
         <Typography variant='h5' align='left'  sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>  Beauty Fach Wash </Typography>
        </Box>
         <Box 
         sx={{
        // backgroundColor:'black',
         width:'100%',
         display:'flex',
         justifyContent:'space-evenly',
         padding:'1rem',
         alignItems:'center',
         borderImage: 'linear-gradient(180deg, #0cf5cd, gray) 1',   
       }}> 
         <img src={Facewash} alt='im' />
         <img src={Facewash} alt='im' />
       </Box>
        {/* </Stack> */}
          

       </Box>
      </Stack>
       
      <Stack spacing={2}>
      <Typography variant='h4' align='left' 
      sx={{fontWeight:'500',fontFamily: 'Roboto, Arial, sans-serif'}}>About</Typography>
         <Box 
         sx={{
        // backgroundColor:'black',
        width:'100%',
        border:'1px solid gray',
        display:'flex',
        flexDirection:'column',
         justifyContent:'space-between',
         padding:'2rem',
         alignItems:'center',
           borderTop: '2px solid #0cf5cd',
          borderRight: '2px solid #0cf5cd', 
         borderRadius: '1rem', 
         
       }}> 
       <Typography variant='body2'sx={{fontWeight:'500',}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas ut, enim accusantium cumque possimus sequi quisquam assumenda! Odio nesciunt nulla eius quia est laborum eaque doloremque ipsa nihil numquam.</Typography>
          

       </Box>
      </Stack>

      <Stack spacing={2}>
     
         <Box 
         sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-evenly',
         padding:'2rem',
         alignItems:'center',
          borderImage: 'linear-gradient(180deg, #0cf5cd, gray) 1',
         
       }}> 
      <Button variant="contained" onClick={()=>setAccept(true)} sx={{ width: '15rem', backgroundColor:accept?'#2c3e50':'Transparent',color: accept ? 'white' : 'black',  }} >
      ACCEPT
    </Button >
    <Button variant="contained" onClick={()=>setAccept(false)} sx={{ width: '15rem',border:'1px solid #2c3e50', background:!accept?'#2c3e50':'Transparent',  color: !accept ? 'white' : 'black', }} >
      Reject
    </Button>
          

  </Box>
      </Stack>
     </Stack>
    </Grid2>
   </Box>
  </>
  )
}

export default ViewDetails

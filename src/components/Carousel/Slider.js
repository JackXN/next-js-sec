import React from 'react'
import Carousel from 'react-elastic-carousel';
import {Container, Box, Flex, Image, Text} from '@chakra-ui/react';





const Behavr = "/images/Behavr.png";
const Fid = "/images/Fid.png";
const Patient = "/images/PatientCare.png";
const Wake = "/images/WakeForest.png";
const Clear = '/images/Clear.png';


const data = [
    {
      id: 1,
      imageSrc: Behavr,
    },
    {
      id: 2,
      imageSrc: Fid,
    },
    {
      id: 3,
      imageSrc: Patient,
    },
    {
      id: 4,
      imageSrc: Wake,
    },
  ];

function Slider() {
    return (
        
       <Container sx={styles.container}>
         <Box sx={styles.wrapper}>
             <Text as='h1'>Proudly Trusted By: </Text>
<Carousel 
focusOnSelect={true}
enableSwipe={true}
preventDefaultTouchmoveEvent={true}
enableMouseSwipe={true}
style={{color: 'orange'}}
>
    <Box sx={styles.caro}>
        <Image src={Behavr}/>
    </Box>
    <Box sx={styles.caro}>
        <Image src={Clear} sx={styles.clear}/>
    </Box>
    <Box sx={styles.caro}>
        <Image src={Patient}/>
    </Box>
    <Box sx={styles.caro}>
        <Image src={Wake}/>
    </Box>

</Carousel>
         </Box>
       </Container>
    )
}


const styles = { 
    container: {
        background:'gray',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign:'center',
        fontFamily: 'Barlow Condensed,sans-serif',
        fontWeight: 'bolder',
        fontSize: ['35px'],
        width: '100%',
        color:'white',
    },
    caro: {
        display: 'flex',
        alignItems:'center',
        textAlign:'center',
        flexDirection: 'column',
        justify:'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    clear: {
        mt: '95',
    }
}

export default Slider

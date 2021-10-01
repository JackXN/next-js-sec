import React from 'react'
import Carousel from 'react-elastic-carousel';
import {Container, Box, Flex, Image, Text} from '@chakra-ui/react';


const imageOne = '/subscription.svg'
const Beha = '/images/Behavr.png'

function Slider() {
    return (
       <Container sx={styles.container}>
         <Box sx={styles.wrapper}>
<Carousel 
focusOnSelect={true}
enableSwipe={true}
preventDefaultTouchmoveEvent={true}
enableMouseSwipe={true}
style={{color: 'orange'}}
>
    <Box sx={styles.caro}>
        < Image  draggable={false} src={Beha}/>
    </Box>
    <Box sx={styles.caro}>
        <Image draggable={false} src={Beha}/>
    </Box>
    <Box sx={styles.caro}>
        <Image draggable={false} src={Beha}/>
    </Box>
    <Box sx={styles.caro}>
        <Image draggable={false} src={Beha}/>
    </Box>
    <Box sx={styles.caro}>
        <Image draggable={false} src={Beha}/>
    </Box>
</Carousel>
         </Box>
       </Container>
    )
}


const styles = { 
    container: {
      mt: '300px',
      background: 'transparent',
       
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
    }
}

export default Slider

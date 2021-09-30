import React from 'react'
import {Flex,Container, Box, StylesProvider, Grid} from '@chakra-ui/react';

import ServiceCardColumn from './ServiceCardColumn';


// Images wont load so ill just use these vars for now
const imageOne = '/subscription.svg'
const imageTwo = '/partner.svg'
const imageThree = '/subscription.svg'


const data  = [
    {
      id: 1,
      imgSrc: imageOne,
      title: "Penetration Testing",
      text: "We offer a full suite of testing options, including: vulnerability scanning, external and internal network, web application, API, mobile, wireless, physical, social engineering, and compliance testing packages.",
    },
    {
      id: 2,
      imgSrc: imageTwo,
      title: "Secure Data Storage",
      text: "Our clients are important to us. Whether its PCI-DSS, CIS TOP 20, or other industry compliance standards, we are always here to help and care for the customer making sure your privacy is our number one priority",
    },
    {
      id: 3,
      imgSrc: imageThree, 
      title: "Training",
      text: "We are also passionate about teaching the importance of information security and are offering free internships to anyone interested in becoming cyber security experts. We are here to help, help us help you.",
    },
  ];


function ServiceCards({
}) {
    return (
    <>
      <Box sx={styles.card}>
        <Box sx={styles.grid}>
            {data.map((item) => (
                <ServiceCardColumn key={item.id}
                title={item.title}
                text={item.text}
                src={item.imgSrc}
                />
            ))}
        </Box>
      </Box>
      </>
    )
}


const styles = {
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt:'20px',
    },
    grid: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
    }
   
}


export default ServiceCards

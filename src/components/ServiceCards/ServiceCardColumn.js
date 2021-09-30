/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import data from "./Data";
import {
  Flex,
  Container,
  Box,
  StylesProvider,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react';
import { BiCheckShield as Shield } from "react-icons/bi";

function ServiceCardColumn({ src, altText = "default alt text", title, text }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.upperText}>
      <Image src={src}  alt="icon" sx={styles.img}/>
          <Heading >{title}</Heading>
        <Box>
          <Text as='p' sx={styles.description} >{text}</Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
height: '100%',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
color: 'white',
margin: ['20px'],
background:'#120E14',
padding: '20px',
borderRadius: '5px',
  },
  upperText: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    height: ['30px'],
    mb: '10px',
  },
  description: {
    mt: '20px',
  }
}



// const styles = {
//   card: {
//       // backgroundColor: 'rgba(0,0,0,0.6)',
//       display:'flex',
//       flexDirection: ['column'],
//       borderRadius: '5px',
//      margin: ['20px',null,null,null,,null,'150px'],
//      boxShadow: 'inset 0 0 0 0 #D80286',
//     webkitTransition: "ease-out 0.4s",
//     background: 'linear-gradient(to right, #AD0442 50%,rgb(16, 12, 16) 50%)',
//   mozTransition: "ease-out 0.4s",
//   transition: " all ease-out 0.4s",
//   backgroundPosition:" right bottom",
//   backgroundSize: '200% 100%',
//      borderRight: 'solid #AD0441 2px ',
//      borderLeft: 'none',
//      '&:hover': {
//       backgroundPosition: 'left bottom',
//       color: 'white',
//       cursor: 'pointer',
//     },
//      '&:focus': {
//       inset: '-3.5rem 0 0 0 var(--hover)',
//       inset: '3.5rem 0 0 0 var(--hover)',
//      } ,
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign:'center',
//     padding: '20px',
//     maxWidth: '290px',
//   },
//   img: {
//    height: ['30px'],
//    '&:hover': {
//      color: 'white',
//    }
//   },
//   title: {
//       color: 'white',
//       fontFamily: "Barlow Condensed, sans-serif",
//       fontSize: ['22px', '34px'],
//       mb: '10px',
//       position: 'relative',
//       fontWeight: 'medium'

//   },
//   subTitle: {
//       color: 'white',
//       fontFamily: "Barlow Condensed, sans-serif",
//       fontWeight: '500',
//       fontSize: ['20px', ]
//   },
//   cardContent: {
//       display: 'flex',
//       flexDirection: 'column',
//       padding: '20px',
//   }
// };

export default ServiceCardColumn;

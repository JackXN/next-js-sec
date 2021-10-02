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

function ServiceCardColumn({ src, altText = "default", title, text }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.upperText}>
      <Image src={src}  alt="icon" sx={styles.img}/>
          <Heading sx={styles.heading}>{title}</Heading>
        <Box>
          <Text as='p' sx={styles.description} >{text}</Text>
        </Box>
      </Box>
    </Box>
    
  );
}

const styles = {
  card: {
maxHeight: '500px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
color: 'white',
margin: ['20px'],
mt:['20px', '50px', '100px'],
background:'#120E14',
padding: ['20px','30px',],
borderRadius: '5px',
boxShadow: 'inset 0 0 0 0 #D80286',
    webkitTransition: "ease-out 0.4s",
    // background: ' linear-gradient(90deg, rgba(173,4,63,1) 44%, rgba(200,35,78,1) 81%);'
    background: 'linear-gradient(to right, rgba(173,4,63,1)  50%, rgba(16, 12, 16,) 50%)',
  mozTransition: "ease-out 0.4s",
  transition: " all ease-out 0.4s",
  backgroundPosition:" right bottom",
  backgroundSize: '200% 100%',
  '&:focus': {
          inset: '-3.5rem 0 0 0 var(--hover)',
          inset: '3.5rem 0 0 0 var(--hover)',
         } ,
         '&:hover': {
          backgroundPosition: 'left bottom',
          color: 'white',
          cursor: 'pointer',
        },
  },
  heading: {
fontFamily: 'Barlow, sans-serif',
fontSize: ['20px', '25px'],

  },
  upperText: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    height: ['80px','80px'],
    mb: '10px',
  },
  description: {
    mt: '20px',
    maxWidth: '300px',
    fontSize: ['15px',],
    fontFamily: 'Barlow, sans-serif',
    fontWeight: '400',
  },
  wrapper: {
   
  },
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

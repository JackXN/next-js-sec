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
import {Image} from 'theme-ui'
import { BiCheckShield as Shield } from "react-icons/bi";

function ServiceCardColumn({ src, altText = "default alt text", title, text }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.cardContent}>
      
        <Box sx={styles.wrapper}>
        <Image src={src} sx={styles.img} alt="icon"/>
          <Heading sx={styles.title}>{title}</Heading>
          <Text sx={styles.subTitle}>{text}</Text>
        </Box>
      </Box>
    </Box>
  );
}



const styles = {
  card: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      display:'flex',
      flexDirection: ['column'],
      margin: '30px',
      borderRadius: '20px',
      borderTop: 'solid gray 1px',
      borderBottom: 'solid gray 1px',
      maxHeight: '500px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    padding: '20px',
    maxWidth: '280px',
  },
  img: {
   height: ['30px'],
  },
  title: {
      color: '#AD0441',
      fontFamily: "Barlow Condensed, sans-serif",
      fontSize: ['22px', '34px'],
      mb: '10px',
      position: 'relative',
      fontWeight: 'medium'

  },
  subTitle: {
      color: 'white',
      fontFamily: "Barlow Condensed, sans-serif",
      fontWeight: 'light',
  },
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
  }
};

export default ServiceCardColumn;

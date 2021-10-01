import React from "react";
import Carousel from "react-elastic-carousel";
import { Container, Box, Flex, Image, Text } from "@chakra-ui/react";

const Behavr = "/images/Behavr.png";
const Fid = "/images/Fid.png";
const Patient = "/images/PatientCare.png";
const Wake = "/images/WakeForest.png";

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

function SliderItems() {
  return <Container></Container>;
}

export default SliderItems;

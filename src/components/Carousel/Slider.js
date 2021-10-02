import React from "react";
import Carousel from "react-elastic-carousel";
import { Container, Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Slider.module.css";
import Item from "./Item";
import styled from "styled-components";

const Behavr = "/images/Behavr.png";
const Fid = "/images/Fid.png";
const Patient = "/images/PatientCare.png";
const Wake = "/images/WakeForest.png";
const Clear = "/images/Clear.png";
const College = "/Images/College.png";
const Asheville = "/Images/Asheville.png";
const Berkely = "/Images/Berkely.jpeg";
const Thor = "/Images/Thor.png";

const Items = [
  { id: 1, imageSrc: Behavr },
  { id: 2, imageSrc: Fid },
  { id: 3, imageSrc: Patient },
  { id: 4, imageSrc: Wake },
  { id: 5, imageSrc: Clear },
  { id: 6, imageSrc: College },
  { id: 7, imageSrc: Asheville },
  { id: 8, imageSrc: Berkely },
  { id: 9, imageSrc: Thor },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const DarkLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`;

function Slider() {
  return (
    <section style={{ height: "59px" }}>
      <DarkLayer>
        <Box sx={styles.wrapper}>
          <Text as="h1" sx={styles.text}>
            Proudly Trusted By:{" "}
          </Text>
          <Carousel
            style={{
              // height: '10%',
              // display: 'flex',
              marginBottom: "200px",
              textAlign: "center",
              justify: "center",
              // alignItems: 'center',
              // background: 'rgba(31,33,33, 0.2)',
              // background: 'white',
            }}
            enableAutoPlay={true}
            showArrows={false}
            enableSwipe={true}
            breakPoints={breakPoints}
          >
            {Items.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.imageSrc}
                  alt="item"
                  draggable={false}
                  sx={styles.img}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </DarkLayer>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontFamily: "Barlow Condensed,sans-serif",
    fontWeight: "bolder",
    fontSize: ["35px"],
    width: "100%",
    mt: "200px",
    backgroundImage: "url('/HackerTwo.jpeg')",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  caro: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    justify: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
  img: {
    cursor: "grab",
    "&:hover": {
      cursor: "grab",
    },
  },
  text: {
    color: "white",
    pb: "100px",
    fontSize: ["50px", "50px"],
  },
};

export default Slider;

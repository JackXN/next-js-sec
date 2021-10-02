import React from "react";
import { Container, Box, Text, StylesProvider } from "@chakra-ui/react";

function test() {
  return (
    <Container sx={styles.container}>
      <Box>
        <Text as="p">Test</Text>
      </Box>
    </Container>
  );
}

const styles = {
  container: {
    height: "100%",
    background: "red",
  },
};

export default test;

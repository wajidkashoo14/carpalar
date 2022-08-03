import { Box, Flex, Heading, Text, Img, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/dashboard.module.css";

function Applicationcard({ heading, input }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      flexDir="column"
      px="6"
    >
      <Heading fontSize="1.5rem" py={5} pb="3">
        {heading}
      </Heading>
      <Flex gap="3rem" py={2} justifyContent="flex-start" alignItems="center">
        {input &&
          Object.keys(input).map((key, idx) => {
            return (
              <Box key={idx}>
                <Heading fontSize="1.1rem" fontWeight="medium" py={2}>
                  {key}
                </Heading>
                <p>{input[key]}</p>
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default Applicationcard;

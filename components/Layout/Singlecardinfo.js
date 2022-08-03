import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Singlecardinfo({ image, text, alt }) {
  return (
    <Box display="flex" flexDirection="column" width="12rem" height="20rem">
      <Image scr={image} height="12rem" alt={alt} />
      <Text height="3rem">{text}</Text>
    </Box>
  );
}

export default Singlecardinfo;

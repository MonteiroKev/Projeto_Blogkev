import { Flex, Text } from "@chakra-ui/react";
import { memo } from "react";

const Footer = () => {
  return (
    <Flex
      p="20px"
      w="100%"
      position="fixed"
      bottom="0"
      direction={["column", "row"]}
      justify="center"
      zIndex="10"
      bg="gray.900"
      color="white"
      fontWeight="bold"
    >
      <Text textAlign="center">Desenvolvido por Kevyn</Text>
    </Flex>
  );
};

export default memo(Footer);

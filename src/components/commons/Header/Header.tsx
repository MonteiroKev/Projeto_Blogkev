import { Center, Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";

export function Header() {
  return (
    <div>
      <Center bg="gray.900" p="1rem" color="white">
        <Flex align="center">
          <Heading marginLeft=".5rem">Blog </Heading>
        </Flex>
      </Center>
    </div>
  );
}

export default memo(Header);

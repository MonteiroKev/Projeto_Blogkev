import { Center, Flex, Heading } from "@chakra-ui/react";

export function Header() {
    return (
        <div>
            <Center bg="gray.900" p="1rem" color="white">
                <Flex align="center">
                    <Heading borderRadius="20rem" p=".4rem" bg="white" color="gray.900">K</Heading>
                    <Heading marginLeft=".5rem">Blog </Heading>
                </Flex>
            </Center>
        </div>
    )
}   
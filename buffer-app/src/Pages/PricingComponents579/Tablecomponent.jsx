import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Flex,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const Tablecomponent = ({ data, index }) => {
  console.log(data, index);
  return (
    <div>
      <Table variant={"unstyled"} margin={"150px 0"}>
        <Thead>
          <Tr>
            <Th borderBottom={"1px solid"}>
              <Heading as="h3" size={["sm","sm","md","lg"]}>
                {data.head}
              </Heading>
            </Th>
            <Th border="1px solid">
              <Flex direction={"column"} align={"center"}>
                <Heading as="h3" size="lg">
                  Free
                </Heading>
                <Text> $0 per Channel</Text>
                {index === 0 && (
                  <Button
                    variant={"solid"}
                    bg={"#2C4BFF"}
                    w={"100%"}
                    margin={"20px 0"}
                    color={"white"}
                    _hover={{ bg: "#0e239e" }}
                  >
                    {" "}
                    Get started
                  </Button>
                )}
              </Flex>
            </Th>
            <Th border="1px solid">
              {" "}
              <Flex direction={"column"} align={"center"}>
                <Heading as="h3" size="lg">
                  Essential
                </Heading>
                <Text>$5/mo per channel</Text>
                {index === 0 && (
                  <Button
                    variant={"solid"}
                    bg={"#2C4BFF"}
                    w={"100%"}
                    margin={"20px 0"}
                    color={"white"}
                    _hover={{ bg: "#0e239e" }}
                  >
                    {" "}
                    Try free for 14-days
                  </Button>
                )}
              </Flex>
            </Th>
            <Th border="1px solid">
              {" "}
              <Flex direction={"column"} align={"center"}>
                <Heading as="h3" size="lg">
                  Team
                </Heading>
                <Text> $10/mo per channel</Text>
                {index === 0 && (
                  <Button
                    variant={"solid"}
                    bg={"#2C4BFF"}
                    w={"100%"}
                    margin={"20px 0"}
                    color={"white"}
                    _hover={{ bg: "#0e239e" }}
                  >
                    {" "}
                    Try free for 14-days
                  </Button>
                )}
              </Flex>
            </Th>
            <Th border="1px solid">
              {" "}
              <Flex direction={"column"} align={"center"}>
                <Heading as="h3" size="lg">
                  Agency
                </Heading>
                <Text>$100/mo for 10 channels </Text>
                {index === 0 && (
                  <Button
                    variant={"solid"}
                    bg={"#2C4BFF"}
                    w={"100%"}
                    margin={"20px 0"}
                    color={"white"}
                    _hover={{ bg: "#0e239e" }}
                  >
                    {" "}
                    Try free for 14-days
                  </Button>
                )}
              </Flex>
            </Th>
          </Tr>
        </Thead>

        <Tbody alignContent={"center"} textAlign={"center"} fontSize={["10px","10px","15px","20px"]}>
          {data.content.map((el, i) => {
            return (
              <Tr textAlign={"center"} key={i}>
                <Td textAlign={"left"} borderBottom={"1px solid"}>
                    <Flex direction={"column"} fontSize="17px" maxWidth={"180px"} margin={"0"} width="100%">
                    <Heading as="h3" size="md">
                  {el.subHead[0]}
                </Heading>
                <Text>
                {el.subHead[1]}
                </Text>
                    </Flex>
                </Td>
                <Td textAlign={"center"}  border={"1px solid"} >{el.free==="" ? <AiOutlineCheck />:el.free}</Td>
                <Td textAlign={"center"} border={"1px solid"}>{el.essential==="" ? <AiOutlineCheck/>:el.essential}</Td>
                <Td textAlign={"center"} border={"1px solid"}>{el.team==="" ? <AiOutlineCheck/>:el.team}</Td>
                <Td textAlign={"center"} border={"1px solid"} maxW={"300px"}>{el.agency==="" ? <AiOutlineCheck/>:el.agency}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

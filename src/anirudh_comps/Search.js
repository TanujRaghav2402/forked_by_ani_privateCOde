/** @format */

import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Flex,
  Input,
  Center,
  Divider,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      bg='white'
      p={4}
      sx={{
        borderRadius: "50px",
      }}>
      <HStack alignItems='center'>
        <Center>
          <Box p='3' color='#7480a0'>
            <SearchIcon />
          </Box>
          <Input
            variant='unstyled'
            placeholder='Enter your query'
            w={{ base: "full", md: "auto" }}
          />
        </Center>
        <Divider orientation='vertical' m={3} h={6} borderColor='gray.300' />

        {isSmallScreen && (
          <Select color='#7480a0' placeholder='Select type' variant='ghost'>
            <option value='Residential'>Residential</option>
            <option value='Commercial'>Commercial</option>
          </Select>
        )}

        <Center>
          <Divider orientation='vertical' m={3} h={6} borderColor='gray.300' />
          <Input
            variant='unstyled'
            placeholder='Enter location'
            w={{ base: "full", md: "auto" }}
          />
          <Box p='3' bg='red'>
            <SearchIcon color='white' />
          </Box>
        </Center>
      </HStack>
    </Box>
  );
}

export default Search;

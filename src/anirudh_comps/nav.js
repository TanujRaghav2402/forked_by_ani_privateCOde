/** @format */
import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons";
import logoImage from "../Images/100acress.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Links = ["Home", "About", "Projects", "Blog"];
const linksObject = {
  Home: false,
  About: false,
  Projects: {
    "View all projects": false,
    "Glimpse of all projects": false,
  },
  Blog: false,
};

const NavLink = ({ children, dropdownLinks, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
   
  return (
    <Box
      position='relative'
      cursor='pointer'
      borderBottom='3px solid transparent'
      transition='border-bottom 0.3s'
      _hover={{
        color: "white",
        borderBottom: "3px solid white",
        transition: "border-bottom 0.2s",
      }}>
      <Box
        as='b'
        px={2}
        rounded={"md"}
        cursor='pointer'
        onMouseEnter={() => setIsOpen(true)}
        onClick={dropdownLinks ? handleDropdown : onClick}>
        {children}
      </Box>
      {dropdownLinks && isOpen && (
        <Box
          position='absolute'
          top='100%'
          left={0}
          zIndex={1}
          bg='white'
          p={2}
          borderColor='gray.200'
          whiteSpace='nowrap'
          onMouseLeave={() => setIsOpen(false)}
          rounded='md'>
          {dropdownLinks.map((link) => (
            <Box key={link} py={1} color='black' onClick={onClick}>
              {link}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box bg='red' px={4}>
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            arlabel={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ia-
            variant='unstyled'
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            color='white'
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                maxW={["100px", "200px"]}
                w='200px'
                src={logoImage}
                alt='100acress logo'
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              color='white'
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => {
                if (typeof linksObject[link] === "object") {
                  const dropdownLinks = Object.keys(linksObject[link]);
                  return (
                    <Link style={{ textDecoration: "none" }} to={`/${link}`}>
                      <NavLink key={link} dropdownLinks={dropdownLinks}>
                        {link}
                      </NavLink>
                    </Link>
                  );
                } else {
                  return (
                    <Link style={{ textDecoration: "none" }} to={`/${link}`}>
                      <NavLink key={link} onClick={onClose}>
                        {link}
                      </NavLink>
                    </Link>
                  );
                }
              })}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              variant='link'
              size={["sm", "md"]}
              mr={useBreakpointValue({ base: 2, sm: 4 })}
              colorScheme='red'
              color='white'
              _focus={{ outline: "none" }}
              _hover={{ color: "white" }}
              leftIcon={<PhoneIcon />}>
              9811750130
            </Button>
          </Flex>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack color='white' as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link style={{ textDecoration: "none" }} to={`/${link}`}>
                  <NavLink key={link}>{link}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
}

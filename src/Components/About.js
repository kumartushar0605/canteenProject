import { Box, Container, Heading, Text, Flex, Avatar, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react'

const About = () => {
  return (
    <Box id="about" py={12} >
      <Container maxW="container.lg">
        <MotionHeading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="blue.300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </MotionHeading>
        <Stack spacing={6} mb={12} px={[4, 8]}>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.400"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Zomato is your go-to resource for discovering great places to eat around you. From top-rated restaurants to local favorites, we're on a mission to ensure nobody has a bad meal.
          </MotionText>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.500"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            With millions of users worldwide, we connect foodies with their next dining adventure. Our dedicated team of food enthusiasts works tirelessly to make sure your dining experiences are nothing short of delightful.
          </MotionText>
        </Stack>
        <MotionHeading
          as="h3"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Meet Our Team
        </MotionHeading>
        <Flex justifyContent="center" flexWrap="wrap">
          <TeamMember name="John Doe" role="Founder & CEO" imageUrl="team_member1.jpg" delay={0.8} />
          <TeamMember name="Jane Smith" role="Head of Operations" imageUrl="team_member2.jpg" delay={1.0} />
          {/* Add more TeamMember components as needed */}
        </Flex>
      </Container>
    </Box>
  );
};

const TeamMember = ({ name, role, imageUrl, delay }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      textAlign="center"
      mx={6}
      my={8}
      borderRadius="lg"
      bg="white"
      p={4}
      boxShadow="lg"
      maxWidth="250px"
    >
      <Avatar size="2xl" src={imageUrl} name={name} mb={4} borderColor="blue.800" borderWidth={2} />
      <Text fontSize="xl" fontWeight="bold" color="blue.800">{name}</Text>
      <Text fontSize="lg" color="gray.700">{role}</Text>
    </MotionBox>
  )
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default About
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import React from "react";

const CardComponent = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card borderRadius="xl" size="sm" bg="white" color="black">
      
        <CardHeader>
          <Image src={imageSrc} borderRadius="xl" />
        </CardHeader>
      
        <CardBody>
        <VStack spacing={5} p={6} alignItems="start">
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
          <a>
            <strong>See more</strong> <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          </VStack>
        </CardBody>
    </Card>

  )
};

export default CardComponent;

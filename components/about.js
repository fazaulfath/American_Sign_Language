import React from "react";
import {
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen} colorScheme="orange">
        Learn More
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>American Sign Language (ASL)</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text fontSize="sm">
              American Sign Language (ASL) is a visual language that serves as
              the predominant sign language of Deaf communities.
              <br />
              Here's the list of ASL hand gestures for the alphabet.
            </Text>
            {/* Reference the image by its URL */}
            <Image src="/handImages.svg" alt="ASL Hand Gestures" />
            <Text fontSize="sm">
              This sign language illustration is created by{" "}
              <Link
                href="https://thenounproject.com/pelodrome/"
                isExternal
                color="orange.300"
              >
                Pelin Kahraman
              </Link>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

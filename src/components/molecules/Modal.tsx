import React from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/core";

export default ({ OpenButton, modal, ...props }: any) => {
  const { isOpen, onOpen, onClose } = modal ?? useDisclosure();
  return (
    <>
      {OpenButton && <OpenButton onClick={onOpen} />}
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="2rem">
          <ModalCloseButton rounded="full" top="1rem" right="1rem" />
          <ModalBody p={12} {...props} />
        </ModalContent>
      </Modal>
    </>
  );
};

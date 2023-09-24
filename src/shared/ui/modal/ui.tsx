import { PropsWithChildren, forwardRef, useImperativeHandle } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export interface IAppModal {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export type Props = {
  modalHeader?: React.ReactNode;
  modalBody?: React.ReactNode;
  modalFooter?: React.ReactNode;
};

const AppModal = forwardRef(
  ({ modalBody, modalHeader, modalFooter }: PropsWithChildren<Props>, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useImperativeHandle(ref, () => ({
      onOpen,
      onClose,
      isOpen,
    }));

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {modalHeader && modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>{modalFooter && modalFooter}</ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default AppModal;

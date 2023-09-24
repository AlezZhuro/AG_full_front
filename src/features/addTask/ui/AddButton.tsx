import { useRef } from 'react';

import { IconButton } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';

import { EditableForm } from '@/widgets/editableForm';
import { AppModal, IAppModal } from '@/shared/ui/modal';
import { addTask } from '../lib';

const AddTask = () => {
  const modalRef = useRef<IAppModal | null>(null);
  const addTaskHandle = () => modalRef?.current?.onOpen();
  const closeModal = () => modalRef?.current?.onClose();

  return (
    <>
      <AppModal ref={modalRef} modalBody={
        <EditableForm onCancel={closeModal} onSave={addTask} />
      } />
      <IconButton
        onClick={addTaskHandle}
        colorScheme="blue"
        aria-label="Add Task"
        icon={<AddIcon />}
        position={'fixed'}
        bottom={{ base: '10px', md: '4%' }}
        right={{ base: '10px', md: '4%' }}
      />
    </>
  );
};

export default AddTask;

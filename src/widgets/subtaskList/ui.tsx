import { taskStore } from '@/entities/task';
import { AppModal, IAppModal } from '@/shared/ui/modal';
import { Box, Heading } from '@chakra-ui/react';
import React, { useCallback, useRef } from 'react';
import { EditableForm } from '../editableForm';
import { EntitiesGrid } from '../entitiesGrid';

const SubtaskList = () => {
  const modalRef = useRef<IAppModal | null>(null);
  const updateSubtaskHandler = () => {
    // fetch api for update subtask
  };
  const closeModal = () => {
    modalRef?.current?.onClose();
    // taskStore.clearOpenedItem();
  };

  const onShowMoreSubtask = useCallback(async (taskID: number) => {
    modalRef.current?.onOpen();
    // await taskStore.loadOne(taskID);
  }, []);

  return (
    <Box w={'100%'} mt={10}>
      <Heading size={'sm'}>Subtasks</Heading>
      <EntitiesGrid
        list={taskStore.openedItem?.subtasks}
        onShowMoreCallback={onShowMoreSubtask}
      />
      <AppModal
        ref={modalRef}
        modalBody={
          <EditableForm
            onCancel={closeModal}
            onSave={updateSubtaskHandler}
            item={taskStore.openedItem}
          />
        }
      />
    </Box>
  );
};

export default SubtaskList;

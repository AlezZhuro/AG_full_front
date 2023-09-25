import { useCallback, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, HStack, Heading } from '@chakra-ui/react';

import { taskStore } from '@/entities/task';
import { subtaskStore } from '@/entities/subtask';

import { AppModal, IAppModal } from '@/shared/ui/modal';
import { EditableForm } from '../editableForm';
import { EntitiesGrid } from '../entitiesGrid';

import { NewTaskObjectDTO } from '@/shared/api/models';


const SubtaskList = observer(() => {
  const modalRef = useRef<IAppModal | null>(null);
  const updateSubtaskHandler = (values: NewTaskObjectDTO) => {
    // fetch api for update subtask
  };
  const closeModal = () => {
    modalRef?.current?.onClose();
    subtaskStore.clearOpenedItem();
  };

  const onShowMoreSubtask = useCallback(async (id: number) => {
    await subtaskStore.loadOneSubtask(id);
    modalRef.current?.onOpen();
  }, []);

  return (
    <Box w={'100%'} mt={5} maxH={'400px'} overflow={'scroll'} paddingInline={'10px'}>
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
            item={subtaskStore.openedItem}
          />
        }
      />
    </Box>
  );
});

export default SubtaskList;

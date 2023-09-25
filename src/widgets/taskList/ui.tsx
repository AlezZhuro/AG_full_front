import { useCallback, useEffect, useRef } from 'react';
import { taskStore } from '@/entities/task';
import { observer } from 'mobx-react-lite';
import { VStack } from '@chakra-ui/react';
import { Meta } from '@/shared/api/meta';
import { ListSkeleton } from '../listSkeleton';
import { EntitiesGrid } from '../entitiesGrid';
import { AppModal, IAppModal } from '@/shared/ui/modal';
import { EditableForm } from '../editableForm';
import { SubtaskList } from '../subtaskList';
import { subtaskStore } from '@/entities/subtask';

export const TaskList = observer(() => {
  const requestStatus = taskStore.meta;

  const modalRef = useRef<IAppModal | null>(null);
  const addTaskHandler = () => modalRef?.current?.onOpen();
  const closeModal = () => {
    modalRef?.current?.onClose();
    taskStore.clearOpenedItem();
  };

  useEffect(() => {
    taskStore.fetchList();
  }, []);

  useEffect(() => {
    taskStore.openedItem && addTaskHandler();
  }, [taskStore.openedItem]);

  const onShowMoreTask = useCallback(async (taskID: number) => {
    await taskStore.loadOneTask(taskID);
  }, []);

  const onUpdateTask = useCallback(() => {}, []);

  return (
    <>
      <AppModal
        ref={modalRef}
        modalBody={
          <EditableForm
            onCancel={closeModal}
            onSave={onUpdateTask}
            item={taskStore.openedItem}
          >
            {!!taskStore.openedItem?.subtasks?.length && <SubtaskList />}
          </EditableForm>
        }
      />
      <VStack paddingX={{ base: '10px', md: '20px' }} w={'100%'}>
        {requestStatus === Meta.LOADING && <ListSkeleton />}

        {requestStatus === Meta.SUCCESS && (
          <EntitiesGrid
            list={taskStore.list.items}
            onShowMoreCallback={onShowMoreTask}
          />
        )}
      </VStack>
    </>
  );
});

export default TaskList;

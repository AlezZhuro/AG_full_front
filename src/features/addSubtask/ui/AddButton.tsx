import { useRef } from 'react';

import { EditableForm } from '@/widgets/editableForm';
import { AppModal, IAppModal } from '@/shared/ui/modal';
import { addSubtask } from '../lib';
import { Button } from '@chakra-ui/react';

const AddSubtask = () => {
  const modalRef = useRef<IAppModal | null>(null);
  const addTaskHandle = () => modalRef?.current?.onOpen();
  const closeModal = () => modalRef?.current?.onClose();

  return (
    <>
      <AppModal
        ref={modalRef}
        modalBody={<EditableForm onCancel={closeModal} onSave={addSubtask} />}
      />
      <Button onClick={addTaskHandle} colorScheme="blue" aria-label="Add Task">
        Add
      </Button>
    </>
  );
};

export default AddSubtask;

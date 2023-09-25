import { TaskEntity } from '@/entities/task/model/type';
import { AddSubtask } from '@/features/addSubtask';
import { NewTaskObjectDTO } from '@/shared/api/models';
import { Bool } from '@/shared/lib';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { PropsWithChildren } from 'react';

type Props = {
  item?: TaskEntity | null;
  onSave: (newTask: NewTaskObjectDTO) => void;
  onCancel: () => void;
};

const EditableForm = ({
  item,
  onSave,
  onCancel,
  children,
}: PropsWithChildren<Props>) => {
  const { isOpen: isDisabled, onToggle } = useDisclosure({
    defaultIsOpen: !!item,
  });

  const initFormikState = () => ({
    title: item?.title ?? '',
    description: item?.description ?? '',
    completed: item?.completed ?? false,
  });

  const formik = useFormik({
    initialValues: initFormikState(),
    onSubmit: async (values) => {
      const newFormData = item ? { ...item, ...values } : values;
      await onSave(newFormData);
      onCancel();
    },
  });
  const isEdited = formik.dirty;

  return (
    <VStack align={'flex-start'} minW={'100%'}>
      <Box
        as="form"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        w={'100%'}
      >
        {item?.id && <Heading size="sm">#{item.id}</Heading>}
        {!item && <Heading mb={'20px'}>Create</Heading>}

        <FormControl isInvalid={!!formik.errors.title}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            name="title"
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.title}
            disabled={isDisabled}
            required
          />
          {formik.errors.title && (
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            name="description"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.description}
            disabled={isDisabled}
          />
        </FormControl>

        {item && (
          <FormControl>
            <FormLabel htmlFor="completed">Status</FormLabel>
            <Select
              id="completed"
              name="completed"
              value={`${formik.values.completed}`}
              onChange={formik.handleChange}
              disabled={isDisabled}
              variant="filled"
            >
              <option value={Bool.FALSE}>Todo</option>
              <option value={Bool.TRUE}>Completed</option>
            </Select>
          </FormControl>
        )}

        {!!children && (
          <>
            <HStack mt={'20px'} justify={'space-between'} alignItems={'center'}>
              <Heading size={'sm'} >
                Subtasks
              </Heading>

              <AddSubtask />
            </HStack>

            {children}
          </>
        )}

        <ButtonGroup
          variant="outline"
          spacing="6"
          mt={'40px'}
          w={'100%'}
          justifyContent={'space-between'}
        >
          {
            <Button
              onClick={onToggle}
              variant={!isDisabled ? 'outline' : 'ghost'}
              colorScheme="blue"
              isDisabled={!item}
            >
              Edit
            </Button>
          }
          <HStack>
            <Button onClick={onCancel} colorScheme="red">
              Cancel
            </Button>
            <Button
              type="submit"
              isDisabled={!!item && !isEdited}
              isLoading={formik.isSubmitting}
              colorScheme="green"
            >
              Save
            </Button>
          </HStack>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default EditableForm;

import { TaskDTO } from '@/shared/api/models';
import { Accordion, VStack } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { GridItem } from '../entitiesGridItem';
import { TaskEntity } from '@/entities/task/model/type';

type Props = {
  list: TaskDTO[] | TaskEntity[] | undefined;
  onShowMoreCallback: (id: number) => void;
};

const EntitiesGrid = observer(({ list , onShowMoreCallback}: Props) => {
  const onShowMore = async (taskID: number) => {
    onShowMoreCallback(taskID);
  };
  
  return (
    <>
      <Accordion allowToggle w={'100%'}>
        <VStack spacing={['10px', '20px']} w={'100%'} paddingBottom={'100px'}>
          {!!list.length &&
            list.map((task) => (
              <GridItem
                key={task.id}
                item={task}
                onShowMoreCLick={onShowMore}
              />
            ))}
        </VStack>
      </Accordion>
    </>
  );
});

export default EntitiesGrid;

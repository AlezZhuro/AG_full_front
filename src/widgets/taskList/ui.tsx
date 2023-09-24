import { useEffect } from 'react';
import { taskStore } from '@/entities/task';
import { observer } from 'mobx-react-lite';
import {
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  Stack,
  VStack,
  Text,
  CardHeader,
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from '@chakra-ui/react';
import { Meta } from '@/shared/api/meta';

export const TaskList = observer(() => {
  const requestStatus = taskStore.meta;

  useEffect(() => {
    taskStore.fetchList();
  }, []);

  return (
    <VStack marginX={{ base: '10px', md: '20px' }}>
      {requestStatus === Meta.LOADING && (
        <Stack alignContent={'center'} justifyContent={'center'} w={'100%'}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}

      {requestStatus === Meta.SUCCESS && <TaskGrid />}
    </VStack>
  );
});

export default TaskList;

export const TaskGrid = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      <Accordion allowToggle>
        <Card>
          <AccordionItem>
            <CardHeader>
              <Heading size="sm">#1</Heading>
              <AccordionButton px={0} py={1} justifyContent={'space-between'}>
                <Heading size="md">Client Report</Heading>
                <AccordionIcon />
              </AccordionButton>
            </CardHeader>
            <AccordionPanel p={0}>
              <CardBody w={'300px'}>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </AccordionPanel>
          </AccordionItem>
        </Card>
      </Accordion>
    </SimpleGrid>
  );
};

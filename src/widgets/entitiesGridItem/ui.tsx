import { TaskDTO } from '@/shared/api/models';
import { CheckCircleIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Card,
  AccordionItem,
  CardHeader,
  HStack,
  Heading,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  CardBody,
  CardFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

type Props = { item: TaskDTO; onShowMoreCLick: (id: number) => void };

const GridItem = React.memo(({ item, onShowMoreCLick }: Props) => {
  const clickHandle = () => {
    onShowMoreCLick(item.id);
  };

  return (
    <Card w={'100%'}>
      <AccordionItem>
        <CardHeader>
          <HStack justify={'space-between'}>
            <Heading size="sm">#{item.id}</Heading>
            {item.completed ? <CheckCircleIcon /> : <TimeIcon />}
          </HStack>
          <AccordionButton px={0} py={1} justifyContent={'space-between'}>
            <Heading size="md">{item.title}</Heading>
            <AccordionIcon />
          </AccordionButton>
        </CardHeader>
        <AccordionPanel p={0}>
          <CardBody w={'300px'}>
            <Text>{item.description}</Text>
          </CardBody>
          <CardFooter>
            <HStack w={'100%'} justify={'end'}>
              <Button onClick={clickHandle}>Show more</Button>
            </HStack>
          </CardFooter>
        </AccordionPanel>
      </AccordionItem>
    </Card>
  );
});

export default GridItem;

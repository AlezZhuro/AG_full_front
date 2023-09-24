import { Stack, Skeleton } from '@chakra-ui/react';

const ListSkeleton = () => {
  return (
    <Stack alignContent={'center'} justifyContent={'center'} w={'100%'}>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default ListSkeleton;

import { useQuery } from '@apollo/client';
import { CheckIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack } from '@chakra-ui/react';
import { useAuthProvider } from '@contexts/auth';
import { GetUsersQuery, GET_USERS } from 'graphql/user/get-users-query';
import { useEffect, useMemo, useState } from 'react';

type SelectedUser = { userId: number };
export const SelectAssignees = ({ cleanup, onChange }) => {
  const { user } = useAuthProvider();
  const { data: { users } = {} } = useQuery<GetUsersQuery>(GET_USERS);
  const [selectedUsers, setSelectedUsers] = useState<SelectedUser[]>([]);

  useEffect(() => {
    if (!selectedUsers.length && user) handleAddUser({ userId: user?.id });
    onChange(selectedUsers);
  }, [selectedUsers]);

  useEffect(() => {
    if (cleanup) setSelectedUsers([]);
  }, [cleanup]);

  const handleAddUser = (user: SelectedUser) => {
    setSelectedUsers((prev) => [...prev, user]);
  };

  const handleRemoveUser = (user: SelectedUser) => {
    setSelectedUsers((prev) => prev.filter((u) => u.userId !== user.userId));
  };

  const handleClick = (userId: number) => {
    if (selectedUsers.find((u) => u.userId === userId)) {
      return handleRemoveUser({ userId });
    }

    handleAddUser({ userId });
  };

  const enrichedUsers = useMemo(
    () =>
      users?.map((user) => ({
        ...user,
        isSelected: selectedUsers.find((u) => u.userId === user.id),
      })),
    [users, selectedUsers]
  );

  return (
    <HStack gap={2}>
      {enrichedUsers?.map((user) => (
        <Box key={user.id}>
          <Avatar
            name={user.username}
            size="sm"
            _hover={{
              filter: user.isSelected ? 'brightness(100%)' : 'brightness(70%)',
            }}
            style={{
              filter: !user.isSelected ? 'brightness(100%)' : 'brightness(70%)',
            }}
            cursor="pointer"
            onClick={() => handleClick(user.id)}
          />
          {user.isSelected && (
            <Flex
              alignItems="center"
              justifyContent="center"
              position="absolute"
              height="12px"
              width="12px"
              bg="green"
              rounded="lg"
              bottom="0"
            >
              <CheckIcon h="8px" w="8px" color="white" />
            </Flex>
          )}
        </Box>
      ))}
    </HStack>
  );
};

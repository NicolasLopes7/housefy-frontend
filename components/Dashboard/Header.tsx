import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from '@chakra-ui/react';
import { Maybe } from '@components/common/Maybe';
import { useAuthProvider } from '@contexts/auth';

export const Header = () => {
  const { logout, user, isUserLoading } = useAuthProvider();

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading size="md">Housefy</Heading>

      <Skeleton isLoaded={!isUserLoading && !!user}>
        <Box>
          <Avatar name={user?.name} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<ChevronDownIcon />}
              variant="ghost"
              style={{ padding: 0, margin: 0 }}
            />
            <MenuList>
              <MenuItem>My profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Skeleton>
    </Flex>
  );
};

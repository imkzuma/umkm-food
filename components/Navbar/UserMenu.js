import { 
    Avatar, Flex, MenuButton, MenuDivider, 
    MenuGroup, MenuItem, MenuList, Stack, 
    Text, Button 
} from "@chakra-ui/react";

import { SettingsIcon } from '@chakra-ui/icons';

const UserMenu = [
    {id: 1, title: 'Account', icon: <SettingsIcon />, href: '#'},
    {id: 2, title: 'Settings', icon: <SettingsIcon />, href: '#'},
    {id: 3, title: 'Logout', icon: <SettingsIcon />, href: '#'}
];

export default function UserMenuComponents() {
    return(
        <>
            <MenuButton
                as = {Button}
                rounded = {'full'}
                variant = {'link'}
                cursor = {'pointer'}
                minW = {0}
            >
                <Avatar 
                    size = {'sm'}
                    src = {'https://avatars.dicebear.com/api/male/username.svg'}
                />
            </MenuButton>
            <MenuList alignItems={'center'}>
                <Flex 
                    alignItems={'center'}
                    justifyContent={'start'}
                    px = {5} gap={5}
                    pt = {2} pb = {5}
                >
                    <Avatar 
                        size = {'md'}
                        src = {'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                    <Stack direction = {'column'}>
                        <Text 
                            fontSize = {'lg'} 
                            color = {'black'}
                            fontWeight={'semibold'}
                            marginBottom = {'-7px'}
                        >
                            Gung Krisna
                        </Text>
                        <Text 
                            fontSize = {'sm'} 
                            color = {'gray.500'}
                        >
                            gungkrisna@gmail.com
                        </Text>
                    </Stack>
                </Flex>
                <MenuDivider px = {5} borderColor = {'gray.300'} />
                    <MenuGroup title="Profile">
                        {UserMenu.map(item => {
                            return(
                                    <MenuItem key = {item.id} as = "a"
                                        href = {item.href}
                                        gap = {3} py = {3}
                                        alignItems={'center'}
                                        color = {'gray.600'}
                                        _hover={{
                                            color: 'gray.700'
                                        }}
                                    >
                                        {item.icon}
                                        <Text fontSize = {'md'}>
                                            {item.title}
                                        </Text>
                                    </MenuItem>   
                            )
                        })}
                    </MenuGroup>
            </MenuList>
        </>
    )
}
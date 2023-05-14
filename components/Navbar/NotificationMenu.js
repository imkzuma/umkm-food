import { Icon, IconButton, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

export default function NotificationMenu(){
    return(
        <>
            <MenuButton
                as = {IconButton}
                aria-label='Options'
                icon={
                    <Icon as = {FaBell} 
                        fontSize = "xl" 
                        
                        cursor = {'pointer'}
                    /> 
                }
                color = {'#727272'}
                _hover={{
                    color: "gray.600"
                }}
                _active={{
                    color: "gray.600"
                }}
                bg = {'transparent'}
            />
            <MenuList>
                <MenuItem>test notif</MenuItem>
            </MenuList>
        </>
    )
}
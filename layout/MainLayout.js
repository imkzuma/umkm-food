import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ChatComponent from "@/components/chat";
import { Box } from "@chakra-ui/react";

export default function MainLayout({ children }){
    return(
        <>
            <Navbar />
            { children }
            <Box 
                pos = {'fixed'}
                zIndex = {999}
                bottom={5} right={5}
            >
                <ChatComponent />
            </Box>
            <Footer />
        </>
    )
}
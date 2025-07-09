import { useContext } from "react";
import {MessageContext} from "../providers/MessageProvider";

function useMessage() {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessage must be used within MessageProvider');
    }
    
    return context;
}

export default useMessage
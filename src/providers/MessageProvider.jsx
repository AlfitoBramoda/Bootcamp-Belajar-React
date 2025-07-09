import { createContext, useState  } from "react"

const MessageContext = createContext()

function MessageProvider({children}) {
    const [message, setMessage] = useState('Welcome to our amazing app!');
    const [author, setAuthor] = useState('Admin Team');

    // The data we want to share with any component that needs it
    const value = {
        message,
        author,
        setMessage,
        setAuthor
    };

    return (
        <MessageContext.Provider value={value}>
        {children}
        </MessageContext.Provider>
    );
}

export {MessageProvider, MessageContext}
import { MessageProvider } from '../providers/MessageProvider'
import { ThemeProvider } from '../providers/ThemeProvider'
import { AuthProvider } from './AuthProvider'

function AppProviders({children}) {
    return (
        <ThemeProvider>
            <AuthProvider>
                <MessageProvider>
                    {children}
                </MessageProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default AppProviders
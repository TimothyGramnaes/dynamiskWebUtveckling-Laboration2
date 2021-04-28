import Api from './Api'
import { AuthProvider } from "../components/context/authContext"
function ContextMaster() {
    
    return (
        <AuthProvider>
            <Api />
        </AuthProvider>
    )
}

export default ContextMaster
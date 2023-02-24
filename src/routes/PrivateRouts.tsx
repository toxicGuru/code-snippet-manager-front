import { Navigate } from "react-router-dom"

interface Props {
    children: React.ReactElement
}

const PrivateRouts: React.FC<Props> = ({ children }) => {
    const auth = true

    if (auth) {
        return children
    }
    return <Navigate to="/login" replace />

}

export default PrivateRouts
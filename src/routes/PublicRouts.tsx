import { Navigate } from "react-router-dom"

interface Props {
    children: React.ReactElement
}

const PublicRoute: React.FC<Props> = ({ children }) => {
    const auth = true

    if (auth) {
        <Navigate to='/' replace />
    }
    return children
}

export default PublicRoute

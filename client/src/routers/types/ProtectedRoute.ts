import ModuleRoutes from "./ModuleRoutes"

interface ProtectedRoute extends ModuleRoutes {
    isPrivate: true
}

export default ProtectedRoute
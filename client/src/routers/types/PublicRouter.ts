import ModuleRoutes from "./ModuleRoutes"

interface PublicRouter extends ModuleRoutes {
    isPrivate: false
}

export default PublicRouter
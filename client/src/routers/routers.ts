// import DashboardPage from "../pages/Dashborad"
// import LoginPage from "../pages/Login"
// import SignUp from "../pages/SignUpPage"
// import { IRouteItem } from "./types"

import ProtectedPageRoute from "./routerPages/ProtectedPage"
import PublicPageRoute from "./routerPages/PublicPage"
import ProtectedRoute from "./types/ProtectedRoute"
import PublicRouter from "./types/PublicRouter"

export type RoutesType = ProtectedRoute | PublicRouter

const modules: RoutesType[] = [ProtectedPageRoute, PublicPageRoute]

export default modules
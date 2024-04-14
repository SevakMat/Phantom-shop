import ProtectedPageRoute from "./routerPages/ProtectedPage";
import PublicPageRoute from "./routerPages/PublicPage";
import ProtectedRoute from "./types/ProtectedRoute";
import PublicRouter from "./types/PublicRouter";

export type RoutesType = ProtectedRoute | PublicRouter;

const modules: RoutesType[] = [ProtectedPageRoute, PublicPageRoute];

export default modules;

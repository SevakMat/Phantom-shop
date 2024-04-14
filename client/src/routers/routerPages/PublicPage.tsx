import LoginPage from "../../pages/public/LoginPage";
import SignUpPage from "../../pages/public/SignUpPage";
import PublicRouter from "../types/PublicRouter";

const PublicPageRoute: PublicRouter = {
  isPrivate: false,
  routerProps: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ],
};

export default PublicPageRoute;

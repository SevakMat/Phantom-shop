import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import modules from "./routers";
import { RootState } from "../store";
import { useAppSelector } from "../store";

const RoutersContainer: () => JSX.Element = () => {
  const { isLoggedIn, user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <BrowserRouter>
      <Routes>
        {modules.map(({ isPrivate, routerProps }) => {
          return routerProps.map((flan) =>
            isPrivate && !isLoggedIn ? (
              <Route path={flan.path} element={<Navigate to="/login" />} />
            ) : !isPrivate && isLoggedIn ? (
              <Route
                path={flan.path}
                element={
                  <Navigate
                    to={
                      user?.role === "ADMIN"
                        ? "/admin/products"
                        : "/user/product/create"
                    }
                  />
                }
              />
            ) : (
              <Route path={flan.path} element={flan.element} />
            )
          );
        })}
        <Route path={"*"} element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersContainer;

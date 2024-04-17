import { useContext } from "react";
import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { RootState, useAppSelector } from "../../../../store";

interface MenuItem {
  label: string;
  path: string;
}

interface RolePermissions {
  [key: string]: MenuItem[];
}

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

  .MuiListSubheader-root {
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${theme.typography.pxToRem(12)};
    color: ${theme.colors.alpha.trueWhite[50]};
    padding: ${theme.spacing(0, 2.5)};
    line-height: 1.4;
  }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      .MuiListItem-root {
        padding: 1px 0;
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(["color"])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }
      }
    }
`
);

const SidebarMenu = () => {
  const { closeSidebar } = useContext(SidebarContext);
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const rolePermissions: RolePermissions = {
    ADMIN: [
      { label: "Products", path: "/admin/products" },
      { label: "Orders", path: "/admin/orders" },
    ],
    USER: [{ label: "Create Product", path: "/user/product/create" }],
  };

  const permissions: MenuItem[] = rolePermissions[user?.role ?? "ADMIN"] || [];

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              INFO
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              {permissions.map(({ label, path }) => (
                <ListItem key={path} component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to={path}
                    startIcon={<TableChartTwoToneIcon />}
                  >
                    {label}
                  </Button>
                </ListItem>
              ))}
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
};

export default SidebarMenu;

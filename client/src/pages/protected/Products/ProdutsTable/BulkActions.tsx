import { useState, useRef } from "react";

import {
  Box,
  Menu,
  IconButton,
  Button,
  ListItemText,
  ListItem,
  List,
  Typography,
  TableCell,
  Tooltip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { ProductType } from "../../../../store/types/product/product";
import EditProduct from "./EditProduct";

interface BulkActionsProps {
  product: ProductType;
}

function BulkActions({ product }: BulkActionsProps) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableCell>
        <Tooltip title="Edit Product" arrow>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              "&:hover": {
                background: "red",
              },
              color: theme.palette.primary.main,
            }}
            color="inherit"
            size="small"
          >
            <EditTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </TableCell>
      <EditProduct open={open} onClose={handleClose} product={product} />
    </>
  );
}

export default BulkActions;

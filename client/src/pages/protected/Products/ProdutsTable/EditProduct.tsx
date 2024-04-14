import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CreateProductService } from "../../../../services/product.service";
import { useDispatch } from "react-redux";
import { updateProdutEffect } from "../../../../store/effects/product/product.effect";
import { ProductType } from "../../../../store/types/product/product";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  product: ProductType;
}

const EditProduct: React.FC<PopupProps> = ({ open, onClose, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<ProductType>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateProdutEffect(formData));

    onClose(); // Close the dialog
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: "900px",
          width: "100%",
        },
        "& .MuiDialogTitle-root": {
          display: "flex",
          justifyContent: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      <DialogTitle>Products</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Product Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
            required
          />
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              padding: "15px 0",

              "@media(max-width: 900px)": {
                flexDirection: "column",
              },
            }}
          >
            <Button
              type="submit"
              style={{
                padding: "5px 30px",
                backgroundColor: "orange",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Edit Product
            </Button>
            <Button
              onClick={onClose}
              style={{
                padding: "5px 30px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;

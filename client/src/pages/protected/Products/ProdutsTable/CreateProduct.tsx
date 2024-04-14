import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createProdutEffect } from "../../../../store/effects/product/product.effect";

export interface ProductType {
  id?: string;
  name: string;
  price: number;
}

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

const CreateProduct: React.FC<PopupProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<ProductType>({
    name: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createProdutEffect(formData));
    onClose();
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
              Create Product
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

export default CreateProduct;

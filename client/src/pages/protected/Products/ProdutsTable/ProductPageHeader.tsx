import { Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import CreateProduct from "./CreateProduct";

function ProductPageHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Products
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create Product
        </Button>
      </Grid>

      <CreateProduct open={open} onClose={handleClose} />
    </Grid>
  );
}

export default ProductPageHeader;

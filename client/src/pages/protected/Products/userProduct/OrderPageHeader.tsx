import { Typography, Button, Grid } from "@mui/material";

function OrderPageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Orders
        </Typography>
      </Grid>
    </Grid>
  );
}

export default OrderPageHeader;

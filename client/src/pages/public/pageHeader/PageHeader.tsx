import { Typography, Grid } from "@mui/material";

interface OrderPageHeaderProps {
  title: string;
}

function OrderPageHeader({ title }: OrderPageHeaderProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default OrderPageHeader;

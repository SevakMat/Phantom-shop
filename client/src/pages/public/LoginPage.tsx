import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Theme,
} from "@mui/material";
import { LoginDataType } from "../../services/types";
import { useDispatch } from "react-redux";
import { loginEffect } from "../../store/effects/auth/auth.effects";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "#f0f2f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "#1877f2",
    "&:hover": {
      backgroundColor: "#1467c9",
    },
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await dispatch(loginEffect(formData, navigate));
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Log In"
            )}
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default LoginPage;

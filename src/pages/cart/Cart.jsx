
import "./Cart.css";

import {
  Box,
  Button,

  Paper,
  styled,
  IconButton,
  Badge,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, DeleteForever, Remove } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));
const Cart = () => {
  // Why <<<component="form">>> ?
  return (<Box>
     <Paper dir="rtl" className="item-container">
        <div className="img-title-parent">
          <img src="####" alt="" />
          <p className="product-name">T-shirt</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#1976d2", ml: "10px" }} onClick={() => {}}>
            <Add />
          </IconButton>

          <StyledBadge badgeContent={1} color="secondary" />

          <IconButton sx={{ color: "#1976d2", mr: "10px" }} onClick={() => {}}>
            <Remove />
          </IconButton>
        </div>

        <div className="price">$100</div>

      <IconButton color="error" sx={{display:{xs:'inline-flex',md:'none'}}}>
        <Delete />
      </IconButton>
        <Button sx={{display:{xs:'none',md:'inline-flex'}}} variant="text" color="error">
          delete
        </Button>
      </Paper>
      <Paper sx={{width:'200px',mx:'auto',mt:'60px'}}>
        <Typography align="center" p={2} variant="h6">
          Cart Summary
        </Typography>
        <Divider/>
        <Stack sx={{justifyContent:'space-between',p:1.2}} direction="row">
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">$100 </Typography>
        </Stack>
        <Divider/>
        <Button fullWidth color="primary" variant="contained">
          CHECKOUT
        </Button>
      </Paper>
  </Box>);
};

export default Cart;

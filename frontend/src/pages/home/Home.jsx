import {Stack, useTheme } from "@mui/system";
import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";

const recievedDataFromAPI = [{}, {},{}, {}];
const Home = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{flexWrap:'wrap',justifyContent:'center'}}>
      {recievedDataFromAPI.map((item) => {
        return (
          <Card  sx={{ maxWidth: 277, mb: 6, mx: 2 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mui.com/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "space-between" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" ,p:1,lineHeight:'1.1'}}
              >
                Add To Cart
              </Button>
              <Typography
                variant="body1"
                mr={1}
                color={theme.palette.error.light}
              >
                $100
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;

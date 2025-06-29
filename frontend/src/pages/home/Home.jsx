import React from "react";
import {Stack, useTheme } from "@mui/system";
import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { useGetproductsByNameQuery } from '../../Redux/productsApi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetproductsByNameQuery();
  if(isLoading){
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }
  if(data){
    return (
    <Stack direction={"row"} sx={{flexWrap:'wrap',justifyContent:'center'}}>
      {data.map((item) => {
        return (
          
          <Card  className="card" key={item.imageLink} sx={{ maxWidth: 277, mb: 6, mx: 2 }}>
            <CardMedia
              component="img"
              height="277"
              image={item.imageLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
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
                ${item.price}
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
  }
};

export default Home;

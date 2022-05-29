import React, { useContext, useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProductList = () => {

    const navigate= useNavigate();


  const prod1 =
    "https://imgk.timesnownews.com/story/Call-of-duty-mobile-poster.jpg?tr=w-1200,h-900 ";
  const prod2 =
    "https://static.toiimg.com/thumb/msid-70736096,width-1200,height-900,resizemode-4/.jpg";
  const prod3 = "https://cms.qz.com/wp-content/uploads/2017/11/pubg-poster.jpg?quality=75&strip=all&w=1200&h=900&crop=1";
  const prod4 =
    "https://i2.wp.com/blog.indiegala.com/wp-content/uploads/2020/04/tekken-7-article-poster-e1587261346211.jpg?fit=1104%2C700&ssl=1";

    const {addToCart} = useContext(UserContext)
  return (
    <Paper sx={{height:"100vh"}}>
      <header className="bg-light">
        <Container sx={{ padding: "0 0" }}>
          <TextField
            // className="w-100"
            sx={{ width: "100%" }}
            label="Explore"
            placeholder="search your product"
          ></TextField>
        </Container>
      </header>
      <section>
        {/* <div className="row"> */}

          {/* container - row ,item - column */}
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod1} height={180} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component="div">
                      call of duty
                    </Typography>
                    <Typography
                      className="text-muted"
                      variant="body1"
                    
                    >
                      Shooter
                    </Typography>
                    <Typography
                      variant="h4"
                    >
                      $22.54/-
                    </Typography>
                    <Button color="success" variant="contained" onClick={(e) => addToCart("call of duty")}>Add to Cart</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod2} height={180} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      NFS Most wanted
                    </Typography>
                    <Typography variant="caption" className="text-muted" component="div">
                     Racing
                    </Typography>
                    <Typography
                      variant="h4"
                    >
                      $9.99/-
                    </Typography>
                    <Button color="success" variant="contained" onClick={(e) => addToCart("NFS most wanted")}>Add to Cart</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod3} height={180} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Pubg
                    </Typography>
                    <Typography variant="caption" className="text-muted" component="div">
                      Shooting
                    </Typography>
                    <Typography
                      variant="h4"
                    >
                      $31.99/-
                    </Typography>
                    <Button color="success" variant="contained" onClick={(e) => addToCart("pubg")}>Add to Cart</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod4} height={180} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      tekken 3
                    </Typography>
                    <Typography variant="caption" className="text-muted" component="div">
                      Fight
                    </Typography>
                    <Typography
                      variant="h4"
                    >
                      $19.04/-
                    </Typography>
                    <Button color="success" variant="contained" onClick={(e) => addToCart("tekken 3")}>Add to Cart</Button>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        {/* </div> */}
      </section>
    </Paper>
  );
};

export default ProductList;

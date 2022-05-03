import React from 'react'
import {Card, CardContent, CardMedia, Container, Paper, Typography} from "@mui/material";


const Amazon = () => {
    const product1="https://thumbs.dreamstime.com/z/heap-long-french-fries-white-background-136423957.jpg";
    // const img="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=20&m=1220017909&s=170667a&w=0&h=4I_l8ZyiZ8sebPsRo6UpFmdrV-MZgEvxb3smE-TbgLE=";
  return (
    <Paper>
        <Container>
            this is my container
        </Container>
        <Card>
        <CardMedia component="img" image={product1} height={250} background-siz/>

        
        <CardContent>
            <Typography>
                Best food photo
            </Typography>
        </CardContent>
        </Card>
    </Paper>
  )
}

export default Amazon
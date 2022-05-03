import { Card, CardContent, Container } from "@mui/material";
import React, { useState } from "react";
import "./Flipkart.css";

const FlipKart = () => {
  let img1 =
    "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxY1Ntd3ZkODVMLl9TUzQwMF8uanBn.jpg";
  let img2 =
    "https://m.media-amazon.com/images/I/410t1dtIAYL._SY450_.jpg";
  let img3 =
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/productimage/2020/1/15/dae45a26-8b6e-40a3-8842-2c7bb9e5c1f81579049061347-1.jpg";
  let img4 =
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398806-sm-r865fzdainu-481079649?$684_547_PNG$";

    const [mainImg, setMainImg] = useState(img1)
  return (
    <div>
      <section sx={{ height: "600px" }}>
        <Container
          sx={{
              m:0,
              pl:3

          }}
        >
          <div className="row">
            <div className="col-2">
              <Card>
                <CardContent>
                  <img className="img-fluid proimg" src={img1} alt="" onMouseEnter={()=>{setMainImg(img1)}}/>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img className="img-fluid proimg" src={img2} alt="" onMouseEnter={()=>{setMainImg(img2)}}/>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img className="img-fluid proimg" src={img3} alt="" onMouseEnter={()=>{setMainImg(img3)}}/>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img className="img-fluid proimg" src={img4} alt="" onMouseEnter={()=>{setMainImg(img4)}}/>
                </CardContent>
              </Card>
            </div>
            <div className="col-5" sx={{height:'450px'}}>
              <Card>
                <CardContent>
                  <img className="img-fluid centerImg" src={mainImg} alt="" />
                </CardContent>
              </Card>
            </div>
            <div className="col-5">
              <h2>Best branded watches that you will ever see</h2>
              <p>Only at a price of <strong>Rs 999/-</strong></p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FlipKart;

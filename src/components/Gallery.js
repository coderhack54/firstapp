import React, { useState } from 'react'

const Gallery = () => {

    const img1="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
    const img2="https://wallpaperaccess.com/full/4665581.jpg"
    const img3="http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2"
    const img4="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"

    const [mainImg, setmainImg] = useState(img3)
  return (
    <div className='container'>
        <img className="img-fluid" src={mainImg} alt="" />
            <div className="row mt-5">
                <div className="col-md-3">
                    <img src={img1} alt="" className="img-fluid" onMouseEnter={() => { setmainImg(img1)}}/>
                </div>
                <div className="col-md-3">
                    <img src={img2} alt="" className="img-fluid" onMouseEnter={() => { setmainImg(img2)}}/>
                </div>
                <div className="col-md-3">
                    <img src={img3} alt="" className="img-fluid" onMouseEnter={() => { setmainImg(img3)}}/>
                </div>
                <div className="col-md-3">
                    <img src={img4} alt="" className="img-fluid" onMouseEnter={() => { setmainImg(img4)}}/>
                </div>
            </div>
    </div>
  )
}

export default Gallery
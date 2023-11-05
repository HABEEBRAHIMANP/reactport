import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import block from "./images/13.jpg";
import bit from "./images/1.jpg";
import beg from "./images/2.jpg";
import defi from "./images/3.jpg";
import dapp from "./images/4.jpg";
import eth from "./images/5.jpg";
import js from "./images/6.jpg";
import link from "./images/7.jpg";
import dot from "./images/8.jpg";
import react from "./images/9.jpg";
import contract1 from "./images/10.jpg";
import contract2 from "./images/11.jpg";
import security from "./images/12.jpg";
import uaecode from "./images/uaecode.jpg";
import tdra from "./images/Transforming Tasks with AI Certificate 1699029060.png";
import ms365 from "./images/ms365.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Certificates.css";


SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
  return(
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">My certificates participation and completion from different platform.</p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true, 
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <img src={contract2} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={link} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dapp} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={block} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bit} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={beg} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defi} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dot} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eth} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contract1} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={security} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={uaecode} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tdra} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ms365} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Certificates;
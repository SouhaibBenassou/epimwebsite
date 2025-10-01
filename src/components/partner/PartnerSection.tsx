"use client";
import { partnerLogos } from "@/data/data";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateY from "../utils/DivAnimateY";
import Image from "next/image";
type Props = {
  style?: string;
};
const PartnerSection = ({ style }: Props) => {
  return (
    <div className={`partner-logo section-padding ${style} overflow-hidden`}>
      <div className="container">
        <DivAnimateY className="row part_bg g-2">
          <div className="col-md-4">
            <div className="partner_title ">
              <h3 >
                Nos établissements partenaires
              </h3>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <Swiper
              className="partner"
              autoplay={true}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
            >
              {partnerLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <Link href="#"> 
                    <Image src={logo} width={133} height={40} alt="" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DivAnimateY>
      </div>
    </div>
  );
};

export default PartnerSection;

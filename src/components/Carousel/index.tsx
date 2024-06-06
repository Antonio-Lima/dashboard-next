"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MyResearchType } from "@/@types";
import SwiperCore from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Button } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

import CarouselCard from "./Card";
import MoreCard from "./MoreCard";
import { THEME } from "@/constants/theme";

interface CarouselProps {
  data: MyResearchType[];
}

export default function Carousel({ data }: CarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const [slideState, setSlideState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSwiperUpdate = (swiper: SwiperCore) => {
    setSlideState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
  };

  return (
    <Box position="relative" mt="28px">
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSwiperUpdate}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselCard status={item.status} title={item.name} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <MoreCard />
        </SwiperSlide>
      </Swiper>
      <Box
        position="absolute"
        top="35%"
        right="-66px"
        left="-66px"
        display="flex"
        justifyContent="space-between"
      >
        <ArrowButton
          className="swiper-button-prev"
          onClick={goPrev}
          icon={<ArrowBackIosNewIcon />}
          disabled={slideState.isBeginning}
        />
        <ArrowButton
          className="swiper-button-next"
          onClick={goNext}
          icon={<ArrowForwardIosIcon />}
          disabled={slideState.isEnd}
        />
      </Box>
    </Box>
  );
}

interface ButtonProps {
  onClick: () => void;
  icon: ReactNode;
  disabled?: boolean;
  className: string;
}
function ArrowButton({
  onClick,
  className,
  icon,
  disabled = false,
}: ButtonProps) {
  return (
    <Button
      className={className}
      sx={{
        color: THEME.colors.white,
        minWidth: "0",
        width: "46px",
        height: "46px",
        background: THEME.colors.black,
        borderRadius: "4px",

        "&:hover": {
          background: THEME.colors.white,
          color: THEME.colors.black,
        },
        "&:disabled": {
          opacity: 0.4,
          background: THEME.colors["gray-300"],
          color: THEME.colors["gray-500"],
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Button>
  );
}

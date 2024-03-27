'use client';

import { useState } from "react";
import { m } from "framer-motion";

import { Box, Stack, Button, Typography } from "@mui/material";

import SvgColor from "src/components/svg-color";


export default function Splash() {
  const [scrollX, setScrollX] = useState(0);

  const transition = {
    repeatType: 'mirror',
    ease: 'linear',
    duration: 40,
    repeat: Infinity,
  };

  const renderSlides = (
    <Stack
      direction="row"
      alignItems="flex-start"
      sx={{
        width: "800%",
        height: "100%",
        position: "relative",
        left: `-${scrollX}%`, // Start from the left side of the screen
        overflow: "hidden",
        gap: "10px"
      }}
    >
      <Stack
        key="slide1"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-01.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-02.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-03.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-01.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-02.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-03.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-01.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
      <Stack
        key="slide2"
        component={m.div}
        animate={{ x: ['0%', '-1000%'] }}
        transition={transition}
        sx={{
          display: "flex",
          transition: "transform 1s linear",
          width: "100%", // Adjust this width based on the total number of images
        }}
      >
        <Box
          component={m.img}
          alt="light_1"
          src="/assets/images/home/Nurse-Card-02.png"
          sx={{ width: "100vw", height: "auto" }}
        />

      </Stack>
    </Stack>
  );

  return (
    <Stack sx={{ backgroundColor: (theme) => theme.palette.primary.main, minHeight: "100vh", gap: "60px", alignItems: "center", justifyContent: "center" }}>
      <Stack sx={{ width: "100%", overflow: "hidden" }}>
        {renderSlides}
      </Stack>
      <Stack sx={{ color: "white", textAlign: "center", gap: "5px" }}>
        <Typography variant="h1">Upright</Typography>
        <Typography variant="subtitle1">Caring for each life, nurturing relationships,<br /> and promoting self-care</Typography>
      </Stack>
      <Stack sx={{ width: "80%" }}>
        <Button size="large" variant="contained" endIcon={<SvgColor src="/assets/icons/untitled/ic-solar_arrow-narrow-right.svg" />} sx={{
          backgroundColor: "white", '&:hover': {
            bgcolor: 'white', // Change background color on hover
            color: (theme) => theme.palette.text.primary
          }, color: (theme) => theme.palette.text.primary, borderRadius: "50px"
        }}>See Available Nurses</Button>
      </Stack>
    </Stack>
  );
}

'use client';

import { useForm } from "react-hook-form";

import { useTheme } from '@mui/material/styles';
import {
  Link,
  Stack,
  Divider,
  MenuItem,
  Container,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";

import SvgColor from "src/components/svg-color";
import FormProvider, { RHFTextField } from "src/components/hook-form";
import CustomPopover, { usePopover } from "src/components/custom-popover";

import NurseCard from "./nurse-card";


// Styles
const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  minHeight: 80,
};

const iconButtonStyles = {
  border: "2px solid white",
  borderRadius: "50px",
  width: "fit-content",
  height: "fit-content",
};

const inputAdornmentStyles = {
  "&.MuiInputAdornment-root": {
    marginTop: "0px !important"
  },
  input: {
    padding: "15px 5px"
  },
};

const data = [
  {
    name: "Sanjay Shrivastav",
    picture: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 5,
    specialization: "Cardiologist",
    phoneNumber: "+1234567890",
    id: "1"
  },
  {
    name: "Shreya Patel",
    picture: "https://images.unsplash.com/photo-1558377235-76f53857000b?q=80&w=2553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 10,
    specialization: "Dermatologist",
    phoneNumber: "+1234567891",
    id: "2"
  },
  {
    name: "Rajesh Tiwari",
    picture: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 15,
    specialization: "Orthopedic Surgeon",
    phoneNumber: "+1234567892",
    id: "3"
  },
  {
    name: "Ananya Sharma",
    picture: "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 8,
    specialization: "Pediatrician",
    phoneNumber: "+1234567893",
    id: "4"
  },
  {
    name: "David Wilson",
    picture: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 20,
    specialization: "Neurologist",
    phoneNumber: "+1234567894",
    id: "5"
  },
  {
    name: "Sarah Jones",
    picture: "https://images.unsplash.com/photo-1538621842929-e2bcb3defc51?q=80&w=3393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 12,
    specialization: "Psychiatrist",
    phoneNumber: "+1234567895",
    id: "6"
  },
  {
    name: "Michael Lee",
    picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 3,
    specialization: "Ophthalmologist",
    phoneNumber: "+1234567896",
    id: "7"
  },
  {
    name: "Emma Taylor",
    picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 18,
    specialization: "Gynecologist",
    phoneNumber: "+1234567897",
    id: "8"
  },
  {
    name: "William Clark",
    picture: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 7,
    specialization: "Endocrinologist",
    phoneNumber: "+1234567898",
    id: "9"
  },
  {
    name: "Olivia Martinez",
    picture: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceInKMs: 25,
    specialization: "Pulmonologist",
    phoneNumber: "+1234567899",
    id: "10"
  }
];


export default function Home() {
  const methods = useForm();
  const theme = useTheme();
  const popover = usePopover();

  const renderEmptyScreen = <Stack sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
    <Stack sx={{ gap: "5px" }}>
      <Typography variant="h2">No nurses available in your area.</Typography>
      <Typography variant="body1" color={theme.palette.grey[600]}>Share your contact details with us and we&lsquo;ll notify you as soon as we arrive.</Typography>
    </Stack>
    <Stack sx={{ gap: "12px", mt: "40px" }}>
      <Divider />
      <Link
        href="https://google.com"
        color={theme.palette.primary.main}
      >
        Notify Me
      </Link>
      <Divider />
      <Link
        href="https://google.com"
        color={theme.palette.primary.main}
      >
        Share this app with someone in need
      </Link>
      <Divider />
    </Stack>
  </Stack>

  return (
    <Stack>
      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 180 }}>
        <MenuItem>
          <Typography variant="body1">Share Feedback</Typography>
        </MenuItem>
      </CustomPopover>

      <Stack sx={{ backgroundColor: theme.palette.primary.main }}>
        <Container sx={containerStyles}>
          <Typography variant="h2" sx={{ color: "white" }}>Upright</Typography>
          <IconButton onClick={popover.onOpen} sx={iconButtonStyles}>
            <SvgColor sx={{ color: "white", width: 18, height: 18 }} src="/assets/icons/untitled/ic-solar_dots-vertical.svg" />
          </IconButton>
        </Container>
      </Stack>

      <Container sx={{ height: "70vh" }}>
        <Stack sx={{ gap: "20px", my: "20px" }}>
          <FormProvider methods={methods} onSubmit={() => { }}>
            <RHFTextField
              variant="filled"
              name="search"
              placeholder="Search Healthcare Professional"
              InputProps={{
                sx: inputAdornmentStyles,
                startAdornment: (
                  <InputAdornment position="start" sx={{ mt: '0px !important' }}>
                    <SvgColor sx={{ color: "grey" }} src="/assets/icons/untitled/ic-eva_search-fill.svg" />
                  </InputAdornment>
                ),
              }}
            />
          </FormProvider>
        </Stack>

        <Stack sx={{ gap: "24px" }}>
          <Typography variant="h4" fontWeight={500}>Nearby Nurses</Typography>
          <Stack sx={{ gap: "16px" }}>
            {data.map(nurse =>
              <NurseCard nurse={nurse} />
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack >
  );
}


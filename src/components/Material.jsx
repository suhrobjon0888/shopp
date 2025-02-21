import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import icon from '../assets/icon.png';
import icons from '../assets/icons.png';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

function Material() {
  function FacebookCircularProgress(props) {
    return (
      <Box sx={{ position: "relative", background: "#6C5FBC" }}>
        <CircularProgress
          variant="determinate"
          sx={(theme) => ({
            color: theme.palette.grey[200],
            ...theme.applyStyles("dark", {
              color: theme.palette.grey[800],
            }),
          })}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={(theme) => ({
            color: "#6C5FBC",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
            ...theme.applyStyles("dark", {
              color: "#6C5FBC",
            }),
          })}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#6C5FBC" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
      </React.Fragment>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {/* First Card */}
      <div className="h-[136px] w-full sm:w-[400px] py-[40px]">
        <div className="flex items-center gap-4 sm:gap-15 justify-evenly">
          <img src={icon} alt="" />
          <div>
            <p className="text-[18px] text-[#1A202C] font-[Manrope] font-bold">Expense</p>
            <p className="text-[15px] text-[#A0AEC0]">Increased By 10%</p>
          </div>
          <div>
            <p className="text-[25px] font-bold font-[Manrope]">$409.00</p>
          </div>
        </div>
        <div className="flex justify-center w-full sm:w-[400px]">
          <Stack spacing={2} sx={{ flexGrow: 1, width: "100%" }}>
            <br />
            <BorderLinearProgress variant="determinate" value={70} />
          </Stack>
        </div>
      </div>

      {/* Second Card */}
      <div className="h-[136px] w-full sm:w-[400px] py-[80px]">
        <div className="flex items-center gap-4 sm:gap-15 justify-evenly">
          <img src={icons} alt="" />
          <div>
            <p className="text-[18px] text-[#1A202C] font-bold font-[Manrope]">Voucher Usage</p>
            <p className="text-[15px] text-[#A0AEC0]">Increased By 10%</p>
          </div>
          <div>
            <p className="text-[25px] font-bold font-[Manrope]">$45.78</p>
          </div>
        </div>
        <div className="flex justify-center w-full sm:w-[400px]">
          <Stack spacing={2} sx={{ flexGrow: 1, width: "100%" }}>
            <br />
            <BorderLinearProgress sx={{ background: "#FBAD18" }} variant="determinate" value={30} />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Material;

import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HeroImg from "../assets/Hero.png";
import vector from '../assets/Vector.png';

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <header className="h-screen flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[60px]">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3.5 justify-center lg:justify-start">
              <div className="w-[80px] h-[2px] bg-[#201F1F33]"></div>
              <p className="text-[#676767] text-[15px] font-[poppins]">
                OVER 1000 USERS
              </p>
            </div>
            <p className="text-[40px] md:text-[55px] lg:text-[75px] font-bold max-w-[600px] font-[poppins] text-[#201F1F]">
              Enjoy Foods All Over The <span className="text-[#5C4EAE]">World</span>
            </p>
            <p className="text-[#676767] text-[16px] md:text-[18px] max-w-[500px] mx-auto lg:mx-0">
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus.
            </p>
            <div>
              <Box sx={{ "& button": {}, marginTop: "40px" }}>
                <div className="flex justify-center lg:justify-start gap-4">
                  <Button onClick={() => navigate("/menu")}
                    className="font-[poppins]"
                    sx={{
                      width: "179px",
                      height: "59px",
                      background: "#6C5FBC",
                      borderRadius: "15px",
                    }}
                    variant="contained"
                    size="large"
                  >
                    Get Started
                  </Button>
                  <Button
                    className="font-[poppins]"
                    sx={{
                      width: "110px",
                      height: "59px",
                      background: "#fff",
                      color: "#6C5FBC",
                      border: "solid 2px #6C5FBC",
                      borderRadius: "15px",
                    }}
                    variant="contained"
                    size="large"
                  >
                    Go Pro
                  </Button>
                </div>
              </Box>
            </div>
            <div className="flex items-center gap-2.5 my-8 justify-center lg:justify-start">
              <img src={vector} alt="trustpilot" />
              <p className="text-[20px] md:text-[25px] font-[500]">Trustpilot</p>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </Stack>
              <p className="text-[16px] md:text-[18px] text-[#334155] font-[poppins]">4900+</p>
            </div>
          </div>
          <div>
            <a href="/">
              <img src={HeroImg} alt="hero img" className="w-full max-w-[500px] mx-auto" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero;
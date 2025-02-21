// import React from "react";
import ops from "../assets/ops.png";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Material from "./Material";

const options = ["This month", "Vegateabes", "Mall"];

function Control() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 h-screen justify-center mt-30">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left max-w-lg">
          <p className="text-[32px] md:text-[40px] font-bold text-[#202020]">
            Control <span className="text-[#6C5FBC]">Purchases</span> Via Dashboard
          </p>
          <div className="my-10 space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-20 w-full max-w-md bg-white shadow-lg rounded-lg flex items-center justify-between p-4">
                <img src={ops} alt="" className="w-12" />
                <div>
                  <p className="text-lg font-medium text-[#323142]">Chicken Hell</p>
                  <p className="text-md text-[#323142]">On The Way</p>
                </div>
                <p className="text-sm text-[#ACADB9]">3:09 PM</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <p className="text-[28px] font-bold text-[#1f2c1a]">Purchases</p>
            <React.Fragment>
              <ButtonGroup ref={anchorRef} variant="contained" sx={{ background: '#6C5FBC' }}>
                <Button sx={{ background: '#6C5FBC' }} onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  sx={{ background: '#6C5FBC' }}
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </div>
          <Material />
        </div>
      </div>
    </div>
  );
}

export default Control;
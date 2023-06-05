import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header-wrapper.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Regrister from "../../Auth/Regrister/Regrister";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle, Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../../Auth/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Auth/UserSlice";

const useStyles = makeStyles((theme) => ({
  iconclose: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const HeaderTop = () => {
  const classes = useStyles();

  // Tạo hằng số để chuyển đổi Login  & Regrister
  const MODE = {
    LOGIN: "login",
    REGRISTER: "register",
  };
  const [mode, setMode] = useState(MODE.LOGIN);

  //KIểm tra header khi đăng nhập

  const loginUser = useSelector((state) => state.user.current);
  const isLogin = !!loginUser.token;

  //Form đăng ký
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //form user
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseAccout = () => {
    setAnchorEl(null);
  };

  //romove user
  const dispatch = useDispatch();
  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };

  // const [info, setInfo] = useState([]);
  // useEffect(() => {
  //     getInfo()
  // }, []);

  // const getInfo = () => {
  //     userApi.getAll()
  //         .then((response) => {
  //             setInfo(response);
  //         })
  //         .catch((e) => {
  //             console.log(e.response);
  //         });
  // };
  // console.log(info);

  return (
    <Typography className="header-top" component={"div"} variant={"body2"}>
      <ul>
          <li>
            <Link to={"#"}>
              <i className="fa fa-history" aria-hidden="true"></i>Tình trạng đơn hàng
            </Link>
          </li>
        {!isLogin && (
          <li onClick={handleClickOpen}>
            <Link to={"#"}>Đăng ký & Đăng nhập</Link>
          </li>
        )}

        {isLogin && (
          <>
            <li>
              <IconButton
                style={{ color: "#FFF", padding: "6px" }}
                sx={{ padding: 100 }}
                onClick={handleClick}>
                <AccountCircle />
                <p></p>
              </IconButton>
            </li>
            <li>
              <Link to={"#"}>
                <i className="fa fa-heart" aria-hidden="true"></i>Sản phẩm yêu thích
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <i className="fa fa-history" aria-hidden="true"></i> Lịch sử mua hàng
              </Link>
            </li>
          </>
        )}
         
      </ul>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <IconButton onClick={handleClose} className={classes.iconclose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGRISTER && (
            <>
              <Regrister closeDialog={handleClose} />
              <Box textAlign="center">
                <Button onClick={() => setMode(MODE.LOGIN)} color="primary">
                  Bạn đã có tài khoản, đăng nhập tại đây!
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button onClick={() => setMode(MODE.REGRISTER)} color="primary">
                  Bạn chưa có tài khoản, đăng ký tại đây!
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
      {isLogin && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseAccout}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          getContentAnchorEl={null}>
          <MenuItem onClick={handleCloseAccout}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}
    </Typography>
  );
};

export default HeaderTop;

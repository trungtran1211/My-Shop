import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header-wrapper.scss'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Regrister from '../../Auth/Regrister/Regrister';

    
const HeaderTop = () => {

    //Form đăng ký
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (
        <div className="header-top">
            <ul>
                <li>
                    <Link to={'#'}>Đăng nhập</Link>
                </li>
                <li onClick={handleClickOpen}>
                    <Link to={'#'}>Đăng ký</Link>
                </li>
                <li>
                    <Link to={'#'}>Đăng Xuất</Link>
                </li>
                <li>
                    <Link to={'#'} ><i className="fa fa-user" aria-hidden="true" ></i>Tài khoản</Link>
                </li>
                <li>
                    <Link to={'#'}><i className="fa fa-heart" aria-hidden="true" ></i>Sản phẩm yêu thích</Link>
                </li>
            </ul>
            <Dialog disableEscapeKeyDown  open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Regrister/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    );
};

export default HeaderTop;
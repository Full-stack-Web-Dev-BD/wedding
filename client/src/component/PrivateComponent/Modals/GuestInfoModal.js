import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InfoIcon from '@material-ui/icons/Info';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GuestInfoModal({ guest }) {
    const [openInfoModal, setOpenInfoModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenInfoModal(true);
    };
    const handleClose = () => {
        setOpenInfoModal(false);
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
      const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    return (
        <div>
            <span onClick={() => handleClickOpen()}><InfoIcon/> View Details  </span>
            <Dialog
                open={openInfoModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{<h3 className="text-center " style={{ color: '#cfa5a4' }} >About Guest</h3>}</DialogTitle>
                <DialogContent  style={{minWidth:'500px'}}>
                    <DialogContentText id="alert-dialog-slide-description" className="text-center">
                        <Chip
                            avatar={<Avatar>{guest.firstName.split('')[0]}</Avatar>}
                            label={<span style={{textTransform:'capitalize'}}>{guest.firstName+' '+guest.lastName}</span>}
                            color="primary"
                            variant="outlined"
                        />
                        <h6 className="mt-4 ">Email : {guest.email}</h6>
                        <h6>Phone Number : {guest.phoneNumber}</h6>
                        <h6>Group/Family: {guest.groupFamily}</h6>
                        <h6 className="mb-3">Status : {guest.status}</h6>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

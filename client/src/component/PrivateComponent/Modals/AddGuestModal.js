import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import axios from 'axios'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddGuestModal({ add }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [groupFamily, setGroupFamily] = useState('')
    const [status, setStatus] = useState('')
    const [addSuccess, setAddSuccess] = useState(false)



    const [openInfoModal, setOpenInfoModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenInfoModal(true);
    };
    const handleClose = () => {
        setOpenInfoModal(false);
    };
    const addGuest = () => {
        axios.post('/add-guest', { firstName: firstName, lastName, email, phoneNumber, groupFamily, status })
            .then(res => {
                setAddSuccess(true)
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <p style={{ cursor: 'pointer' }} onClick={() => handleClickOpen()}> {add} <i style={{ marginLeft: '15px', cursor: 'pointer' }} class="fas fa-users"></i> </p>
            <Dialog
                open={openInfoModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{<h3 className="text-center " style={{ color: '#cfa5a4', paddingTop: '20px' }} >Add  Guest</h3>}</DialogTitle>
                <DialogContent style={{ minWidth: '600px', paddingTop: '30px', paddingBottom: '30px' }}>
                    <DialogContentText id="alert-dialog-slide-description" className="text-center" >
                        {
                            addSuccess ?
                                <h1 className="text-center text-success">Guest Added !</h1> :
                                <div className="col-md-10 offset-md-1 ">
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> First Name</p>
                                        <input onChange={e => { setFirstName(e.target.value) }} placeholder="First Name" type="text" />
                                    </div>
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> Last Name</p>
                                        <input onChange={e => { setLastName(e.target.value) }} placeholder="Last Name" type="email" />
                                    </div>
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> Email</p>
                                        <input onChange={e => { setEmail(e.target.value) }} placeholder="Email" type="text" />
                                    </div>
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> Phone Number</p>
                                        <input onChange={e => { setPhoneNumber(e.target.value) }} placeholder="Phone Number" type="number" />
                                    </div>
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> Group / Family</p>
                                        <select onChange={e => setGroupFamily(e.target.value)}>
                                            <option>Select A Type</option>
                                            <option value="Brides Family">Brides Family</option>
                                            <option value="Brides's Friend ">Brides's Friend </option>
                                            <option value="Grooms Family">Grooms Family</option>
                                            <option value="College Friends ">College Friends </option>
                                        </select>
                                    </div>
                                    <div style={{ textAlign: 'left' }} className="wInputGroup">
                                        <p><i className="fa fa-heart"></i> Status</p>
                                        <select onChange={e => setStatus(e.target.value)}>
                                            <option>Select Status</option>
                                            <option value="Confirm">Confirm</option>
                                            <option value="Pending ">Pending </option>
                                            <option value="Not Going">Not Going</option>
                                        </select>
                                    </div>
                                </div>
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ padding: '30px' }}>
                        {
                            addSuccess ?
                                "" :
                                <>
                                    <button id="closeGuestAddModal" type="button" className="btn btn-sm wBtn btn-secondary" data-dismiss="modal">Cancel</button>
                                    {
                                        firstName && lastName && status && groupFamily ?
                                            <button type="button" onClick={() => { addGuest() }} className="btn btn-sm wBtn">Create</button>
                                            : <button type="button" className="btn  wBtn">Fill UP Required Filed !</button>
                                    }
                                </>
                        }
                </DialogActions>
            </Dialog>
        </div>
    );
}

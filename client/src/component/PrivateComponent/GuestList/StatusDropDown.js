import React, { useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState ,{ bindTrigger, bindMenu } from 'material-ui-popup-state';
import GuestInfoModal from '../Modals/GuestInfoModal';
import Axios from 'axios';
export default function StatusDropDown({ status ,guest}) {
    
    const updateStatus=(UStatus)=>{
        Axios.post('/update-guest-status',{id:guest._id,status:UStatus})
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
        
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <td style={{ cursor: 'pointer' }} {...bindTrigger(popupState)}><span>{status} <ArrowDropDownIcon /> </span></td>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem style={{ textDecoration: 'underline', color: '#cfa5a4', fontWeight: '900' }}>Edit Status</MenuItem>
                        <MenuItem style={{ color: '#cfa5a4' }} onClick={()=>updateStatus('Confirm')}>Confirm</MenuItem>
                        <MenuItem style={{ color: '#cfa5a4' }} onClick={()=>updateStatus('Pending')}>Pending </MenuItem>
                        <MenuItem style={{ color: '#cfa5a4' }} onClick={()=>updateStatus('Not Going')}>Not Going </MenuItem>
                        <MenuItem style={{ color: '#cfa5a4' }} ><GuestInfoModal guest={guest} /></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
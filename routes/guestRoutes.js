const guestRoutes=require('express').Router()
const guestController=require('../controller/guestController')

guestRoutes.post('/add-guest',guestController.addGuest)
guestRoutes.get('/get-guests',guestController.getGuests)
guestRoutes.post('/update-guest-status',guestController.updateGuestStatus)


module.exports=guestRoutes
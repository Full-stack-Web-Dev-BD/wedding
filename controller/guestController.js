const guestModel = require("../model/guestModel")


module.exports = {
    addGuest(req, res) {
        new guestModel({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            groupFamily: req.body.groupFamily,
            status: req.body.status,
        })
        .save()
        .then(doc=>{
            res.status(200).json({message:'Guest added !'})
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({message:"Server error occurd !"})
        })
    },
    getGuests(req,res){
        guestModel.find()
        .then(guests=>{
            res.status(200).json(guests)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({message:"server error "})
        })
    },
    updateGuestStatus(req,res){
        guestModel.findByIdAndUpdate({_id:req.body.id})
        .then(doc=>{
            doc.status=req.body.status
            doc.save()
            .then(updateGuest=>{
                res.status(200).json({message:"Updated"})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({message:"server error"})
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({message:"server error"})
        })
    }
}
const express = require("express");
const router = express.Router();
const user = require("../schema/userSchema");

// post router
router.post("/addAmount", async (req, res) => {
  try {
    const addAmount = new user({
      sendingAmount: req.body.sendingAmount,
      RecievedAmount: req.body.RecievedAmount,
      SenderName: req.body.SenderName,
      ReceiverName: req.body.ReceiverName,
      purpose: req.body.purpose,
    });
    addAmount.save();
    console.log(addAmount);
    res.send({
      status: "true",
      addAmount,
    });
  } catch (error) {
    console.log(error);
  }
});

// for sending the purpose
router.get("/getPurpose", async (req, res) => {
  var myOption = [
    {
      option: "Study",
    },
    {
      option: "Home",
    },
    {
      option: "Tax",
    },
    {
      option: "Current",
    },
    {
      option: "Grocery",
    },
  ];

  res.send({
    myOption,
  });
});

// router to get all the payments

router.get("/allPayments", async (req, res) => {
  const allPayments = await user.find();
  res.send(allPayments);
  console.log(allPayments);
});

// edit payment
router.put("/editPayments/:id", async (req, res) => {
    console.log(req.body);
  const { id } = req.params;
  const updatePayment = await user.findByIdAndUpdate(id, req.body, {
    new: true,
    validators: true,
    upsert: true,
  });
  res.send({ status: "true", updatePayment });
  console.log(updatePayment);
  console.log("Edited Sucessfully");
});

// delete Payment
router.delete("/dlt/:id",async(req,res)=>{
    const {id}=req.params
    const delatePayment=await user.findByIdAndDelete(id)
    if(delatePayment){
        res.send("deleted Sucessfully")
        console.log("deleted Sucessfully");
    }
})

module.exports = router;

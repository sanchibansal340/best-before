const express = require("express");
const router = express.Router();
const { Item, User } = require("../../models/schema");
const passport = require("passport");
const validateItemInput = require("../../validation/item");

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
   User.findById({_id: req.user._id}).populate('items').exec((err, doc) => {
      if(err) throw err;
      else {
         res.status(200).json({ items: doc.items });
      }
   });
});

router.post("/create", passport.authenticate("jwt", { session: false }), (req, res) => {
      const { errors, isValid } = validateItemInput(req.body);
      if (!isValid) {
         return res.status(400).json(errors);
      }

      const newItem = new Item(req.body);

      newItem.save(err => {
         if(err) throw err;
         else {
            req.user.items.push(newItem);
            req.user.save(err => {
               if(err) throw err;
               else {
                  return res.status(200).json({
                     message: {
                        msgBody: "Successfully added a new item", 
                        msgError: false
                     }
                  });
               }
            });
         }
      });
   }
);

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),
   (req, res) => {
      Item.findOneAndDelete({ _id: req.params.id })
         .then(doc => {
            User.findOneAndUpdate({_id: req.user._id}, {
               $pull: {items: req.params.id }}, (err, data) => {
                  if (err) {
                     return res.status(500).json({ error: 'error in deleting item' });
                 }
                 res.status(200).json(doc);
             })
         })
         .catch(err =>
            res.status(400).json("Error deleting an item")
         );
   }
);

module.exports = router;
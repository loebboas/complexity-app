const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const PubThought = require('../models/pubThought');
const PubRoom = require('../models/pubRoom');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {

   /* ===============================================================
     GET ALL PUBLIC ROOMS
  =============================================================== */

  router.get('/allPubRooms', (req, res) => {
    // Search database for all Thoughts
    PubRoom.find({})
      .populate({ path: 'contents' }
      .exec((err, pubRooms) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if thoughts were found in database
                if (!pubRooms) {
                  res.json({ success: false, message: 'No Rooms found.' }); // Return error of no thoughts found
                } else {       
                  res.json({ success: true, pubRooms: pubRooms }); // Return success and array
                }
              }
    }); // Sort blogs from newest to oldest
  });

  
  /* ===============================================================
   GET SELECTED ROOM
  =============================================================== */
  router.get('/getPubRoom/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    PubRoom
        .findOne({_id: req.params.id })
        .populate({
          path: 'contents',
          populate: { path: 'contents' }
        })
        .exec((err, pubRoom) => {
            // Check if error was found or not
            if (err) {
                res.json({success: false, message: err}); // Return error message
            } else  {
                res.json({success: true, pubRoom: pubRoom });
            }
        });
});  

     /* ===============================================================
     GET CONTENT
  =============================================================== */
  router.get('/getPubContent/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    PubThought
        .findOne({ _id: req.params.id })
        .populate({ path: 'contents'})
        .exec((err, pubThought) => {
            // Check if error was found or not
            if (err) {
                res.json({success: false, message: err}); // Return error message
            } else {
                res.json({success: true, pubThought: pubThought });
            }
        });
});  

   /* ===============================================================
     GET PUB THOUGHT
  =============================================================== */
    router.get('/getPubThought/:id', (req, res) => {

         if (!req.params.id) {
                res.json({ success: false, message: 'No thought ID was provided.' }); // Return error message
              } else {

              // Search database for Thought
              PubThought.findOne({_id: req.params.id})
              .populate({
                path: 'contents',
                populate: { path: 'contents' }
              })
              .exec((err, thought) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!thought) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, thought: thought }); // Return success and blogs array
                }
              }
    });
  }
  });


  return router;
}
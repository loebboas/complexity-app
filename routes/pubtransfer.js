const User = require('../models/user'); // Import User Model Schema
const PubThought = require('../models/pubThought');
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {


   /* ===============================================================
     GET ALL ROOMS
  =============================================================== */

  router.get('/allPubRooms', (req, res) => {
    // Search database for all Thoughts
    PubRoom.find({})
      .exec((err, allRooms) => {
              // Check if error was found or not
              if (err) {
                res.json({ suik,ccess: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!allRooms) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, allRooms: allRooms }); // Return success and blogs array
                }
              }
    }); // Sort blogs from newest to oldest
  });

  
   /* ===============================================================
     GET POPULAR THOUGHTS
  =============================================================== */

  router.get('/popularThoughts', (req, res) => {
    // Search database for all Thoughts

    Thought.find({ }) // TODO: return only High Likes
     .exec((err, popThought) => {
              // Check if error was found or not
              if (err) {
                res.json({ suik,ccess: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!allThought) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, popThought: popThought }); // Return success and blogs array
                }
              }
    }); // Sort blogs from newest to oldest
  });
  
  
     /* ===============================================================
     GET PUBLIC THOUGHT
  =============================================================== */
  router.get('/getPubThought/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    Thought
        .findOne({ _id: req.params.id })
        .populate({ path: 'contexts' })
        .populate({
          path: 'contents',
          populate: { path: 'contents' }
        })
        .exec((err, thought) => {
            // Check if error was found or not
            if (err) {
                res.json({success: false, message: err}); // Return error message
            } else {
                res.json({success: true, thought: thought });
            }
        });
});  

     /* ===============================================================
     GET PUBLIC CONTENT
  =============================================================== */
  router.get('/getPubContent/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    Thought
        .findOne({_id: req.params.id })
        .populate({ path: 'contents'})
        .exec((err, thought) => {
            // Check if error was found or not
            if (err) {
                res.json({success: false, message: err}); // Return error message
            } else {
                res.json({success: true, thought: thought });
            }
        });
});   


  return router;
}
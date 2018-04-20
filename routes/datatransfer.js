const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const PubThought = require('../models/pubThought');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {

 /* ===============================================================
     ADD NEW THOUGHT
  =============================================================== */  

router.post('/newThought', (req, res) => {
	if(!req.body.label) {
		res.json({ success: false, message: 'You must input a Label'});
	} else {
		let thought = new Thought({
    label: req.body.label,
    dimensions: req.body.dimensions,
    showAs: req.body.showAs,
    user: req.body.user,
    contexts: req.body.contexts,
    contents: req.body.contents,
    texture: req.body.texture,
    privacy: req.body.privacy
		});
		thought.save((err) => {
			if (err) {
				res.json({ success: false, message: 'Could not save Thought. Error: ', err });
			} else {
				res.json({ success: true, message: 'Thought saved ', newId: thought._id });
			}
		})
	}
});




   /* ===============================================================
     GET ALL THOUGHTS OF USER
  =============================================================== */

  router.get('/allThought', (req, res) => {
    // Search database for all Thoughts
    Thought.find({user: req.decoded.userId})
      .populate({ path: 'contexts', select: 'label' })
      .exec((err, allThought) => {
              // Check if error was found or not
              if (err) {
                res.json({ suik,ccess: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!allThought) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, allThought: allThought }); // Return success and blogs array
                }
              }
    }); // Sort blogs from newest to oldest
  });

  
  
     /* ===============================================================
     GET THOUGHT
  =============================================================== */
  router.get('/getThought/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    Thought
        .findOne({user: req.decoded.userId, _id: req.params.id })
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
     GET CONTENT
  =============================================================== */
  router.get('/getContent/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    Thought
        .findOne({user: req.decoded.userId, _id: req.params.id })
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

   /* ===============================================================
     GET ONE THOUGHT
  =============================================================== */
    router.get('/singleThought/:id', (req, res) => {

         if (!req.params.id) {
                res.json({ success: false, message: 'No thought ID was provided.' }); // Return error message
              } else {

              // Search database for Thought
              Thought.findOne({user: req.decoded.userId, _id: req.params.id}, (err, thought) => {
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

   /* ===============================================================
     ADD NEW PUBLIC THOUGHT
  =============================================================== */  

router.post('/newPubThought', (req, res) => {
	if(!req.body.label) {
		res.json({ success: false, message: 'You must input a Label'});
	} else {
		let thought = new PubThought({
    label: req.body.label,
    likes: 0,
    level: req.body.level,
    dimensions: req.body.dimensions,
    showAs: req.body.showAs,
    user: req.body.user,
    contexts: req.body.contexts,
    contents: req.body.contents,
    texture: req.body.texture,
    privacy: req.body.privacy
		});
		thought.save((err) => {
			if (err) {
				res.json({ success: false, message: 'Could not save public Thought. Error: ', err });
			} else {
				res.json({ success: true, message: 'Public Thought saved ', newId: thought._id });
			}
		})
	}
});

   /* ===============================================================
     ADD NEW PUBLIC ROOM
  =============================================================== */  

  router.post('/newPubRoom', (req, res) => {
    if(!req.body.label) {
      res.json({ success: false, message: 'You must input a Label'});
    } else {
      let room = new PubRoom({
      label: req.body.label,
      level: req.body.level,
      likes: 0,
      admin: req.body.user,
      members: [req.body.user],
      contents: req.body.contents,
      
      });
      pubRoom.save((err) => {
        if (err) {
          res.json({ success: false, message: 'Could not save Room. Error: ', err });
        } else {
          res.json({ success: true, message: 'Room saved ', newId: thought._id });
        }
      })
    }
  });
  

      /* ===============================================================
     GET THOUGHT BY NAME
  =============================================================== */
    router.get('/thoughtByName/:label', (req, res) => {

         if (!req.params.label) {
                res.json({ success: false, message: 'No Value was provided.' }); // Return error message
              } else {

              // Search database for Thought
              
              Thought.findOne({user: req.decoded.userId, label: new RegExp('^'+req.params.label+'$', "i")}, (err, thought) => {
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
 

   /* ===============================================================
     UPDATE ONE THOUGHT
  =============================================================== */
  router.put('/editThought', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No thought id provided' }); // Return error message
    } else {
      // Check if id exists in database
      Thought.findOne({ user: req.decoded.userId, _id: req.body._id }, (err, thought) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid thought id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!thought) {
            res.json({ success: false, message: 'thought id was not found.' }); // Return error message
          } else {
            // Check who user is that is requesting blog update
            if(req.body.editLabel)    { thought.label = req.body.editLabel; }
            if(req.body.editContexts) { thought.contexts = req.body.editContexts; }
            if(req.body.editContents) { thought.contents = req.body.editContents; }
            if(req.body.editDimensions) { thought.contents = req.body.editDimensions; }
                    thought.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err }); // Return error message
                        }
                      } else {
                        res.json({ success: true, message: 'Thought Updated!' }); // Return success message
                      }
                    });
                  
                
          }
        }
      });
    }
  });

  
  /* ===============================================================
     DELETE ONE THOUGHT
  =============================================================== */
  router.delete('/deleteThought/:id', (req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      Thought.findOne({ user: req.decoded.userId, _id: req.params.id }, (err, thought) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!thought) {
            res.json({ success: false, messasge: 'Thought was not found' }); // Return error message
          } else {
            // Get info on user who is attempting to delete post
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if user's id was found in database
                // Remove the blog from database
                    thought.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Thought deleted!' }); // Return success message
                      }
               });
              }
            });
          }
        }
      });
    }
  });

  


 


  return router;
}
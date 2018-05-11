const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const PubThought = require('../models/pubThought');
const PubRoom = require('../models/pubRoom');
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
    level: req.body.level,
    color: req.body.color,
    clicks: req.body.clicks,
    showAs: req.body.showAs,
    user: req.body.user,
    contexts: req.body.contexts,
    contents: req.body.contents,
    dimensions: req.body.dimensions,
    texture: req.body.texture,
    form: req.body.form,
    grid: req.body.grid,
    privacy: req.body.privacy
		});
		thought.save((err) => {
			if (err) {
				res.json({ success: false, message: 'Could not save Thought. Error: ', err });
			} else {
				res.json({ success: true, message: 'Thought saved ', thought: thought });
			}
		})
	}
});

   /* ===============================================================
     ADD NEW PUBLIC THOUGHT
  =============================================================== */  

  router.post('/newPubThought', (req, res) => {
    if(!req.body.label) {
      res.json({ success: false, message: 'You must input a Label'});
    } else {
      let pubThought = new PubThought({
      label: req.body.label,
      level: req.body.level,
      likes: 0,
      views: 0,
      color: req.body.color,
      dimensions: req.body.dimensions,
      showAs: req.body.showAs,
      user: req.body.user,
      contexts: req.body.contexts,
      contents: req.body.contents,
      texture: req.body.texture,
      form: req.body.form,
      grid: req.body,grid,
      privacy: req.body.privacy
      });
      pubThought.save((err) => {
        if (err) {
          res.json({ success: false, message: 'Could not save public Thought. Error: ', err });
        } else {
          res.json({ pubThought: pubThought });
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
        let pubRoom = new PubRoom({
        label: req.body.label,
        likes: 0,
        admin: req.body.admin,
        contents: req.body.contents,
        dimensions: req.body.dimensions,
        visible: req.body.visible,
        activeUsers: req.body.activeUsers
        });
        pubRoom.save((err) => {
          if (err) {
            res.json({ success: false, message: 'Could not save Room. Error: ', err });
          } else {
            res.json({ pubRoom: pubRoom });
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
                res.json({ suiccess: false, message: err }); // Return error message
              } else {
                // Check if thoughts were found in database
                if (!allThought) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no thoughts found
                } else {       
                  res.json({ success: true, allThought: allThought }); // Return success and array
                }
              }
    }); // Sort blogs from newest to oldest
  });

   /* ===============================================================
     GET TIMEARRAY OF USER
  =============================================================== */

  router.get('/timeArray', (req, res) => {
    // Search database for all Thoughts
    Thought.find({ user: req.decoded.userId, 'dimensions.dim': req.body._id })
      .exec((err, timeArray) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if timearray entries were found in database
                if (!allThought) {
                  res.json({ success: false, message: 'No Entries in TimeArray found.' }); // Return error
                } else {       
                  res.json({ success: true, timeArray: timeArray }); // Return success and array
                }
              }
    }); 
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
     GET ROOM
  =============================================================== */
  router.get('/getPubRoom/:id', (req, res) => {
    // Search database for all thoughts linked to :id as bottom
    PubRoom
        .findOne({_id: req.params.id })
        .populate({
          path: 'contents'
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
            if(req.body.editDimensions) { thought.dimensions = req.body.editDimensions; }
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
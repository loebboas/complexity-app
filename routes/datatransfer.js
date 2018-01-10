const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const Link = require('../models/link');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {

 /* ===============================================================
     ADD NEW THOUGHT
  =============================================================== */  

router.post('/newThought', (req, res) => {
	if(!req.body.value) {
		res.json({ success: false, message: 'You must input something'});
	} else {
		let thought = new Thought({
		value: req.body.value,
		user: req.body.user,
    form: req.body.form,
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
     ADD NEW LINK
  =============================================================== */  

router.post('/newLink', (req, res) => {
    let link = new Link({
    user: req.body.user,
    scale: req.body.scale,
    thought: req.body.thought, 
    type: req.body.type,
    position: req.body.position,
    strength: req.body.strength,
    privacy: req.body.privacy
    });
    link.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', newId: link._id });
      }
    });
});


   /* ===============================================================
     GET ALL THOUGHTS OF USER
  =============================================================== */

  router.get('/allThought', (req, res) => {
    // Search database for all Thoughts
    Thought.find({user: req.decoded.userId}, (err, allThought) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
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
    router.get('/thoughtByName/:value', (req, res) => {

         if (!req.params.value) {
                res.json({ success: false, message: 'No Value was provided.' }); // Return error message
              } else {

              // Search database for Thought
              Thought.findOne({user: req.decoded.userId, value: new RegExp('^'+req.params.value+'$', "i")}, (err, thought) => {
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
     GET POPULATED LINKS OF A THOUGHT
  =============================================================== */

    router.get('/linksOfThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
        Link
            .find({user: req.decoded.userId, scale: req.params.id })
            .populate('thought')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    res.json({success: true, allLinks: links });
                }
            });
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
           
                    thought.value = req.body.editValue; // Save value
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
     UPDATE ONE Link
  =============================================================== */
  router.put('/editLink', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No Link id provided' }); // Return error message
    } else {
      // Check if id exists in database
      Link.findOne({ user: req.decoded.userId, _id: req.body._id }, (err, link) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid link id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!link) {
            res.json({ success: false, message: 'link id was not found.' }); // Return error message
          } else {
            // Check who user is that is requesting blog update
                    link.type = req.body.editType; // Save value
                    link.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err }); // Return error message
                        }
                      } else {
                        res.json({ success: true, message: 'Link Updated!' }); // Return success message
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


 /* ===============================================================
     DELETE ONE LINK
  =============================================================== */
  router.delete('/deleteLink/:id', (req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      Link.findOne({ user: req.decoded.userId, _id: req.params.id }, (err, link) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!link) {
            res.json({ success: false, messasge: 'Link was not found' }); // Return error message
          } else {
            // Get info on user who is attempting to delete post
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if user's id was found in database
                // Remove the blog from database
                    link.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Link deleted!' }); // Return success message
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
const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const Link = require('../models/link');
const Session = require('../models/session');
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
		user: req.body.user
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
     ADD NEW SESSION
  =============================================================== */  

router.post('/newSession', (req, res) => {
  if(!req.body.user) {
    res.json({ success: false, message: 'You must input something'});
  } else {
    let session = new Session({
    user: req.body.user,
    thought: req.body.thought,
    link: req.body.link
    });
    session.save((err) => {
      if (err) {
        res.json({ success: false, message: 'Could not save Session. Error: ', err });
      } else {
        res.json({ success: true, message: 'Session saved ', newId: session._id });
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
    mid: req.body.mid,
    top: req.body.top, 
    left: req.body.left,
    right: req.body.right,
    bot: req.body.bot
    });
    link.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', newId: link._id });
      }
    })
});


   /* ===============================================================
     GET ALL THOUGHT
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
     GET EVERYTHING (ALL THOUGHT WITH NO LINK/ONLY BOTLINK
  =============================================================== */

  router.get('/everything', (req, res) => {

    Link
      .find({user: req.decoded.userId,  top: { $exists: true } })
      .exec((err, links) => {
        const ids_of_thoughts_with_top_links = links.map((link) => { return link.mid });
        Thought.find({
          user: req.decoded.userId,
          "_id": { "$nin": ids_of_thoughts_with_top_links},
        }, (err, everything) => {
          res.json({success: true, everything: everything });
        });
      });
  });

  /* ===============================================================
     GET BOT THOUGHT
  =============================================================== */

    router.get('/botThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
        Link
            .find({user: req.decoded.userId, mid: req.params.id, bot: { $exists: true } })
            .populate('bot')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const botThoughts = links.map((link) => {
                        return link.bot
                    });
                    res.json({success: true, botThoughts: botThoughts });
                }
            });
    });

         /* ===============================================================
     GET TOP THOUGHT
  =============================================================== */

    router.get('/topThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
        Link
            .find({user: req.decoded.userId, mid: req.params.id, top: { $exists: true }})
            .populate('top')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const topThoughts = links.map((link) => {
                        return link.top
                    });
                    res.json({success: true, topThoughts: topThoughts });
                }
            });
    });

         /* ===============================================================
     GET LEFT THOUGHT
  =============================================================== */

    router.get('/leftThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
       Link
            .find({user: req.decoded.userId, mid: req.params.id, left: { $exists: true } })
            .populate('left')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const leftThoughts = links.map((link) => {
                        return link.left
                    });
                    res.json({success: true, leftThoughts: leftThoughts });
                }
            });
    });

         /* ===============================================================
     GET RIGHT THOUGHT
  =============================================================== */

    router.get('/rightThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
        Link
            .find({user: req.decoded.userId, mid: req.params.id, right: { $exists: true } })
            .populate('right')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const rightThoughts = links.map((link) => {
                        return link.right
                    });
                    res.json({success: true, rightThoughts: rightThoughts });
                }
            });
    });



         /* ===============================================================
     GET SESSIONTHOUGHTS
  =============================================================== */

    router.get('/session', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
       Session
            .find({user: req.decoded.userId })
            .populate('thought')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const sessionThoughts = links.map((link) => {
                        return link.thought
                    });
                    res.json({success: true, sessionThoughts: sessionThoughts });
                }
            });
    });


         /* ===============================================================
     GET SESSIONLINKS
  =============================================================== */

    router.get('/sessionLink/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
       Session
            .find({user: req.decoded.userId, thought: req.params.id })
            .populate('link')
            .exec((err, links) => {
                // Check if error was found or not
                if (err) {
                    res.json({success: false, message: err}); // Return error message
                } else {
                    const sessionLinks = links.map((link) => {
                        return link.link
                    });
                    res.json({success: true, sessionLinks: sessionLinks });

                }
            });
    });

   /* ===============================================================
     GET TOP LINK
  =============================================================== */

  router.get('/topLink', (req, res) => {
    // Search database for all Thoughts
    Link.find({user: req.decoded.userId}, (err, topLink) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!topLink) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, topLink: topLink }); // Return success and blogs array
                }
              }
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
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
              Thought.findOne({user: req.decoded.userId, value: req.params.value}, (err, thought) => {
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
           
                    thought.value = req.body.edit; // Save value
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
     DELETE ONE THOUGHT, all Links
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
                      Link.find({ $or: [ { top: req.params.id }, { left: req.params.id },  { right: req.params.id }, { mid: req.params.id }, { bot: req.params.id } ] }, (err, links) => {
                        link.remove((err) => {
                          if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'links deleted!' }); // Return success message
                      } 
                        })                          
                      });






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
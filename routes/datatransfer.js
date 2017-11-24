const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const BotLink = require('../models/bot');
const TopLink = require('../models/top');
const LeftLink = require('../models/left');
const RightLink = require('../models/right');
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
     ADD NEW TOPLINK
  =============================================================== */  

router.post('/newTopLink', (req, res) => {
    let topLink = new TopLink({
    user: req.body.user,
    mid: req.body.mid,
    top: req.body.top 
    });
    topLink.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', topLink: topLink });
      }
    })
});

 /* ===============================================================
     ADD NEW BOTLINK
  =============================================================== */  

router.post('/newBotLink', (req, res) => {
    let botLink = new BotLink({
    user: req.body.user,
    mid: req.body.mid,
    bot: req.body.bot 
    });
    botLink.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', botLink: botLink });
      }
    })
});

 /* ===============================================================
     ADD NEW LEFTLINK
  =============================================================== */  

router.post('/newLeftLink', (req, res) => {
    let leftLink = new LeftLink({
    user: req.body.user,
    mid: req.body.mid,
    left: req.body.left 
    });
    leftLink.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', leftLink: leftLink });
      }
    })
});

 /* ===============================================================
     ADD NEW RIGHTLINK
  =============================================================== */  

router.post('/newRightLink', (req, res) => {
    let rightLink = new RightLink({
    user: req.body.user,
    mid: req.body.mid,
    right: req.body.right 
    });
    rightLink.save((err) => {
      if (err) {    
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!', rightLink: rightLink });
      }
    })
});

   /* ===============================================================
     GET ALL THOUGHT
  =============================================================== */

  router.get('/allThought', (req, res) => {
    // Search database for all Thoughts
    Thought.find({}, (err, thought) => {
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
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
  });

     /* ===============================================================
     GET EVERYTHING (ALL THOUGHT WITH NO LINK/ONLY BOTLINK
  =============================================================== */

  router.get('/everything', (req, res) => {

    TopLink
      .find({})
      .populate('mid')
      .exec((err, links) => {
      ids_of_thoughts_with_top_links = links.map((link) => { return link.mid });
       });

    Thought
       .find({ "_id": { "$nin": ids_of_thoughts_with_top_links}}, (err, everything) => {
                    res.json({success: true, everything: everything });
                    console.log(everything);

     
    });
  });


   /* ===============================================================
     GET BOT LINK
  =============================================================== */

  router.get('/botLink', (req, res) => {
    // Search database for all Thoughts
    BotLink.find({ }, (err, botLink) => {
              // Check if error was found or not
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if blogs were found in database
                if (!botLink) {
                  res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
                } else {       
                  res.json({ success: true, botLink: botLink }); // Return success and blogs array
                }
              }
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
  });

     /* ===============================================================
     GET BOT THOUGHT
  =============================================================== */

    router.get('/botThought/:id', (req, res) => {
        // Search database for all thoughts linked to :id as bottom
        BotLink
            .find({mid: req.params.id})
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
        TopLink
            .find({mid: req.params.id})
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
        LeftLink
            .find({mid: req.params.id})
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
        RightLink
            .find({mid: req.params.id})
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
     GET TOP LINK
  =============================================================== */

  router.get('/topLink', (req, res) => {
    // Search database for all Thoughts
    TopLink.find({ }, (err, topLink) => {
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
              Thought.findOne({ _id: req.params.id}, (err, thought) => {
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
  router.put('/updateThought', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No thought id provided' }); // Return error message
    } else {
      // Check if id exists in database
      Thought.findOne({ _id: req.body._id }, (err, thought) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid thought id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!thought) {
            res.json({ success: false, message: 'thought id was not found.' }); // Return error message
          } else {
            // Check who user is that is requesting blog update
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                    thought.value = req.body.value; // Save value
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
      Thought.findOne({ _id: req.params.id }, (err, thought) => {
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
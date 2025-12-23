const express = require("express");
const router = express.Router({ mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing =  require("../models/listing.js");
const Review =  require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Crteate Review
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview));


//Delete Revieew
router.delete ( "/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));


module.exports = router;
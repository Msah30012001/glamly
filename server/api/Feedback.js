const Router = require("express").Router();
const { BadRequestError , Error } = require("../Errors/error");
const Feedback = require("../model/FeedbackModel");
const authenticate = require("../middleware/authenticate")

// fetch all records
Router.get("/feedback", async (req, res, next) => {
  try {
    
    const feedbackData = await Feedback.aggregate([
      {
        $lookup: {
          from: "productskus",
          localField: "product",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
    ]);
    res.status(200).send(feedbackData);

  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/feedback/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const feedbackData = await Feedback.findById(_id);
    if (!feedbackData) {
      throw new BadRequestError("feedback not found");
    }
    res.status(200).json(feedbackData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/feedback/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Feedback.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/feedback",authenticate, async (req, res, next) => {
  try {
    let data = {}
    data = {user:req.userId,...req.body}
    const feedbackData = await Feedback.find({user:req.userId,product:req.body.product});
    console.log(feedbackData.length)
    if(feedbackData.length > 0){
      throw new BadRequestError('feedback is already given')
    }
    const feedback = new Feedback(data);
    const createFeedback = await feedback.save();
    res.status(201).send(createFeedback);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/feedback/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateFeedback = await Feedback.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateFeedback) {
      throw new BadRequestError("feedback not found");
    }
    res.status(201).send(updateFeedback);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/feedback/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteFeedback = await Feedback.findByIdAndDelete(_id);
    if (!deleteFeedback) {
      throw new BadRequestError("feedback not found");
    }
    res.status(200).send(deleteFeedback);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;

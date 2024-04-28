import asyncHandler from "express-async-handler";
import { errorHandler } from "../middleware/error.js";
import Listing from "../models/listing.model.js";

export const createListing = asyncHandler(async (req, res, next) => {
  // 1. create a new listing
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
});

export const deleteListing = asyncHandler(async (req, res, next) => {
  // 1. Find the listing by id
  const listing = await Listing.findById(req.params.id);
  // 2. Check if the listing exists
  if (!listing) {
    return next(errorHandler(404, "Listing not found 😪"));
  }
  // 3. Check if the user is the owner of the listing
  if (req.user.id !== listing.userRef) {
    return next(
      errorHandler(401, "You do not have permission to delete this listing")
    );
  }
  // 4. Delete the listing
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing deleted successfully!");
  } catch (error) {
    next(error);
  }
});

export const updateListing = asyncHandler(async (req, res, next) => {
  // 1. Find the listing by id
  const listing = await Listing.findById(req.params.id);
  // 2. Check if the listing exists
  if (!listing) {
    return next(errorHandler(404, "Listing not found 😪"));
  }
  // 3. Check if the user is the owner of the listing
  if (req.user.id !== listing.userRef) {
    return next(
      errorHandler(401, "You do not have permission to update this listing")
    );
  }
  // 4. Update the listing
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
});
export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer;
    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }
    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }
    let parking = req.query.parking;

    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

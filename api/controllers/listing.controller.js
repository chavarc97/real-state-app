import asyncHandler from "express-async-handler";
import { errorHandler } from "../middleware/error.js";
import Listing from "../models/listing.model.js";


export const createListing = asyncHandler(async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing)
    } catch (error) {
        next(error);
    }
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberSchema = exports.WorkshopSchema = void 0;
const mongoose = require("mongoose");
exports.WorkshopSchema = new mongoose.Schema({
    topic: String,
    place: String,
    organizer: String,
    subscriber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subscriber',
        },
    ],
    startTime: Date,
    duration: Number,
    flyerContent: String,
    creator: String,
    createTime: Date,
    remark: String,
});
exports.SubscriberSchema = new mongoose.Schema({
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop',
    },
    firstName: String,
    lastName: String,
    age: Number,
    neighborhood: String,
    SubscribeTime: Date,
});
//# sourceMappingURL=workshop.schema.js.map
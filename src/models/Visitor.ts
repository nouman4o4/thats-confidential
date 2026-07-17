import mongoose, { Schema, models, model } from "mongoose"

const VisitorSchema = new Schema(
  {
    firstName: String,
    lastName: String,

    enteredDay: Number,
    enteredMonth: Number,
    enteredSecondMonth: Number,
    enteredYear: Number,

    passedAuthentication: Boolean,

    ipAddress: String,
    userAgent: String,

    country: String,
    city: String,
  },
  {
    timestamps: true,
  },
)

export default models.Visitor || model("Visitor", VisitorSchema)

import { NextRequest, NextResponse } from "next/server"

import { connectDB } from "@/app/lib/db"
import Visitor from "@/models/Visitor"

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB()

    // Parse request body
    const body = await request.json()

    const {
      firstName,
      lastName,
      enteredDay,
      enteredMonth,
      enteredSecondMonth,
      enteredYear,
      passedAuthentication,
    } = body

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      enteredDay === undefined ||
      enteredMonth === undefined ||
      enteredSecondMonth === undefined ||
      enteredYear === undefined ||
      passedAuthentication === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 },
      )
    }

    // Get visitor information
    const forwardedFor = request.headers.get("x-forwarded-for")

    const ipAddress = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "Unknown"

    const userAgent = request.headers.get("user-agent") || "Unknown"

    // Save visitor
    const visitor = await Visitor.create({
      firstName,
      lastName,

      enteredDay,
      enteredMonth,
      enteredSecondMonth,
      enteredYear,

      passedAuthentication,

      ipAddress,
      userAgent,
    })
    console.log(visitor)

    return NextResponse.json(
      {
        success: true,
        message: "Visitor saved successfully.",
        visitorId: visitor._id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Visitor Save Error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving visitor data.",
      },
      { status: 500 },
    )
  }
}

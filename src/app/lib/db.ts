import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI || MONGODB_URI === undefined) {
  throw new Error("Please define the MONGODB_URI environment variable.")
}

type CachedConnection = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: CachedConnection | undefined
}

const cached = global.mongooseCache ?? {
  conn: null,
  promise: null,
}

global.mongooseCache = cached

export async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "birthday-website",
    })
  }

  cached.conn = await cached.promise

  console.log("MongoDB State:", mongoose.connection.readyState)

  return cached.conn
}

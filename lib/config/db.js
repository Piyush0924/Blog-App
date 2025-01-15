import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        if (!process.env.MongoDB_URI) {
            throw new Error("MongoDB_URI is not defined in the environment variables");
        }

        await mongoose.connect(process.env.MongoDB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw new Error("Database connection failed");
    }
};

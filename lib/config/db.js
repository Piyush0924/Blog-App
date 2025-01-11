import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI, {

        });
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw new Error("Database connection failed");
    }
};

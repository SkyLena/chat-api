import mongoose from "mongoose"

export const databaseConnect = async () => {
    const URI = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

    await mongoose.connect(URI, (error) => {
        if (error) return console.log('Database Error:', error.message);

        return console.log(
            'Database connect on port:',
            Number(process.env.DATABASE_PORT)
        );
    });
};
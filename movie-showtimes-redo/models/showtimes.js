import { conn } from "../mongoose.js";

const showtimeSchema = conn.Schema({
    movieTitle: {type: String, required: true,},
    startTime: {type: String, required: true, unique: true},
    runTime: Number,
    rating: String,
    genre: String,
    synopsis: String,
});

const Showtime = conn.model("showtime", showtimeSchema);

const showtimes = await Showtime.find();

export const createShowtime = async (newShowtime) => {
    try {
        const createdShowtime = await Showtime.create(newShowtime);
        return createdShowtime._id;
    } catch (error) {
        if ((error.code = 11000)) {
            throw new Error("Duplicate Error")
        }
    }
}

export const listShowtimes = async () => {        
    const allShowtimes = await Showtime.find();
    return allShowtimes;
}
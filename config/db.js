
// MongoDB Connection
const connectDB = () => {
    mongoose.connect("mongodb+srv://eshaansharma07:eshaan123@fullstack.j2qyedu.mongodb.net/CardsDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
}

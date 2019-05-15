import express from "express";
import bodyParser from "body-parser";
const app=express();
import todoRouter from "./routes/Todo.route";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/todos",todoRouter);
app.get("/",(req,res)=>res.json({message:"Hello World!"}));
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running...");
})

export default app;
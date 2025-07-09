const Task = require('../models/task');

exports.addTask = async(req,res)=>{

    const {title, description} = req.body;

    try {
        if(!title || !description)res.status(401).send("All field required");

        const newTask = new Task({
            title,description
        });

        await newTask.save();
        res.status(201).json({message:"Task added successfully", Task:newTask});
    } catch (error) {
        console.log("task add nhi ho paya h ",error.message);
        res.status(500).json({message:"server side problem"});
    }
}

exports.getAllTasks = async(req,res)=>{
    try {
        const allData = await Task.find();
        if(!allData)res.status(404).send("no data found");

        res.status(200).json(allData);
        
    } catch (error) {
        console.log("task add nhi ho paya h ",error.message);
        res.status(500).json({message:"server side problem"});
    }
}

exports.getTaskById = async(req,res)=>{
    const {id} = req.params;
    try {
        const allData = await Task.findById(id);
        if(!allData)res.status(404).send("no data found");

        res.status(200).json(allData);
        
    } catch (error) {
        console.log("task add nhi ho paya h ",error.message);
        res.status(500).json({message:"server side problem"});
    }
}

exports.updateTask = async(req,res)=>{
    const {id} = req.params;
    const {title,description}= req.body;
    try {
        const allData = await Task.findByIdAndUpdate(id,{title,description},{new:true, runvalid:true});
        if(!allData)res.status(404).send("no data found");


        res.status(200).json({message:"value updated successfully"});
        
    } catch (error) {
        console.log("task add nhi ho paya h ",error.message);
        res.status(500).json({message:"server side problem"});
    }
}

exports.deleteTask = async(req,res)=>{
    const {id} = req.params;
    try {
        const allData = await Task.findByIdAndDelete(id);
        if(!allData)res.status(404).send("no data found");


        res.status(200).json({message:"value deleted successfully"});
        
    } catch (error) {
        console.log("task add nhi ho paya h ",error.message);
        res.status(500).json({message:"server side problem"});
    }
}


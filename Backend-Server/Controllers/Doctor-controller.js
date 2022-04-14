const Doctor = require('../Model/Doctor')

const getAllDoctor = async (req,res,next) =>{
    let doctor ;
    try {
        doctor = await Doctor.find();
    } catch(err){
        console.log(err)
    }
    if(!doctor){
       return res.status(404).json({message:'Doctors Not Found'})
    }
    return res.status(200).json({doctor});
}

const getById = async (req,res,next) =>{
    const id = req.params.id;
    let doctor;
    try{
        doctor = await Doctor.findById(id);
    } catch(err){
        console.log(err);
    }
    if(!doctor){
        return res.status(404).json({message:'Doctor Not Found'})
    }
    return res.status(200).json({doctor});

}

const addDoctor = async (req, res, next) => {
    const{name, speciality, availability, cost, image} = req.body;
    let doctor;
    try{
        doctor = new Doctor({
            name, speciality, availability, cost, image
        })
        await doctor.save();
    } catch(err){
        console.log(err);
    }
    if(!doctor){
        return res.status(500).json({message:"Doctor Not Added"});
    }
    return res.status(201).json({doctor});
}
const addDate = async (req, res, next) => {
    const id = req.params.id;
    const{name, speciality, availability, cost, image, date, time} = req.body;
    let doctor;
    try{
        doctor = await Doctor.findByIdAndUpdate(id,  {
            name, speciality, availability, cost, image, date, time
        })
        await doctor.save();
    } catch(err){
        console.log(err);
    }
    if(!doctor){
        return res.status(500).json({message:"Doctor Not Added"});
    }
    return res.status(201).json({doctor});
}


exports.getAllDoctor = getAllDoctor;
exports.getById = getById;
exports.addDoctor = addDoctor;
exports.addDate = addDate;
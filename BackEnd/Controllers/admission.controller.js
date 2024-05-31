const Admission = require("../Models/admission.model");

const createAdmission = async (req, res) => {
    try {
        const { fatherName, motherName, gender, parentMobileNo, state, country } = req.body;

        if (!fatherName || !motherName || !gender || !parentMobileNo || !state || !country) {
            return res.status(400).json({
                status: 400,
                error: "All fields (fatherName, motherName, gender, parentMobileNo, state, country.) are required.",
            })
        }

        // create a new user with the hashed password
        const newAdmission = new Admission({
            fatherName,
            motherName,
            gender,
            parentMobileNo,
            state,
            country,
        })

        // save the user to the database
        const saveAdmission = await newAdmission.save();
        if (!saveAdmission) {
            return res.status(400).json({
                status: 400,
                error: "Admission is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "Admission created successfully",
            data: saveAdmission,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getAdmission = async (req, res) => {
    try {
        const getAdmissiondata = await Admission.find();
        if (!getAdmissiondata) {
            return res.status(400).json({
                status: 400,
                error: "Admission Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Admission Data Get successfully",
            data: getAdmissiondata,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getAdmissionById = async (req, res) => {
    const { Id } = req.body;
    try {
        const getAdmissionbyid = await Admission.findById(Id);
        if (!getAdmissionbyid) {
            return res.status(400).json({
                status: 400,
                error: "Admission Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Admission Data Get successfully",
            data: getAdmissionbyid,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const updateAdmission = async (req, res) => {
    try {
        const admissionId = req.body.Id;
        const updateAdmissionData = await Admission.findByIdAndUpdate(admissionId, req.body, {
            new: true,
        });
        if (!updateAdmissionData) {
            return res.status(400).json({
                status: 400,
                error: "Admission Not updated!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Admission Updated successfully",
            data: updateAdmissionData,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}

const DeleteAdmissionData = async (req, res) => {
    try {
        const addmissionId = req.body.Id;
        const addDataDelete = await Admission.findByIdAndDelete(addmissionId);
        if (!addDataDelete) {
            return res.status(400).json({
                status: 400,
                error: "Admission-Data Not Deleted!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Admission-Data Deleted successfully",
            data: addDataDelete,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}



module.exports = { createAdmission, getAdmission, getAdmissionById, updateAdmission, DeleteAdmissionData  };
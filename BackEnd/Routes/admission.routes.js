const { createAdmission, getAdmission, getAdmissionById, updateAdmission, DeleteAdmissionData } = require("../Controllers/admission.controller");

module.exports = app => {
    app.post("/api/createAdmission", createAdmission);
    app.get("/api/getAdmission", getAdmission);
    app.post("/api/getAdmissionById", getAdmissionById);
    app.put("/api/updateAdmission", updateAdmission);
    app.delete("/api/deleteAdmission", DeleteAdmissionData);
}
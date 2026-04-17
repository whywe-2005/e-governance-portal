const Service = require("../models/Service");

exports.submitService = async (req, res) => {
  try {
    console.log("API HIT ✅");
    console.log(req.body);

    const data = new Service(req.body);

    await data.save();

    console.log("SAVED TO DB ✅"); // 👈 ADD THIS

    res.json({ message: "Submitted successfully" });
  } catch (err) {
    console.error("ERROR ❌", err);
    res.status(500).json({ message: "Server error" });
  }
};
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

module.exports = async (req, res) => {
  res.status(200).json({ message: "Images API is working!" });
  const selectedFolder = req.query.folder;

  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: selectedFolder,
      max_results: 20,
    });

    res.status(200).json(result.resources);
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch images", details: error.message });
  }
};

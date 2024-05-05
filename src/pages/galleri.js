import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import Title from "../components/title";
import { CloudinaryContext } from "cloudinary-react";

const options = {
  bgOpacity: 0.8,
  zoom: false,
  counter: false,
};

const cloudName = process.env.REACT_APP_CLOUD_NAME;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;
const apiSecret = process.env.REACT_APP_CLOUDINARY_API_SECRET;

const Galleri = () => {
  const [images, setImages] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("NewYork_partier");

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;
      try {
        const response = await axios.get(url, {
          auth: {
            username: apiKey,
            password: apiSecret,
          },
          params: {
            prefix: selectedFolder,
            max_results: 10,
            resource_type: "image",
          },
        });
        console.log("API Response received:", response.data);
        const filteredImages = response.data.resources.filter(
          (img) => img.format === "jpg" || img.format === "jpeg"
        );
        setImages(filteredImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        console.log("Response Error Data:", error.response);
      }
    };

    fetchImages();
  }, [selectedFolder, cloudName, apiKey, apiSecret]);

  return (
    <div>
      <Header />
      <Title title={"Galleri"} titleColor={"text-light"} />
      <select
        value={selectedFolder}
        onChange={(e) => setSelectedFolder(e.target.value)}
      >
        <option value="Baade">Både</option>
        <option value="Bede_udendors">Bede Udendørs</option>
        <option value="Brusevaegge">Brusevægge</option>
        <option value="Gelaendere_og_altaner">Gelændere og Altaner</option>
        <option value="Glasvaern_indendors">Glasværn Indendørs</option>
        <option value="Glasvaern_udendors">Glasværn Udendørs</option>
        <option value="Gulv_glas">Gulv Glas</option>
        <option value="Montering_af_stalkonstruktioner">
          Montering af Stålkronstruktioner
        </option>
        <option value="NewYork_partier">New York Partier</option>
        <option value="Porte">Porte</option>
        <option value="Vinrum">Vinrum</option>
      </select>
      <CloudinaryContext cloudName={cloudName}>
        <Gallery options={options}>
          {images.map((img) => (
            <Item
              key={img.public_id}
              original={img.secure_url}
              thumbnail={img.secure_url}
              width={img.width}
              height={img.height}
              alt={img.public_id}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.secure_url}
                  alt={img.public_id}
                />
              )}
            </Item>
          ))}
        </Gallery>
      </CloudinaryContext>
    </div>
  );
};

export default Galleri;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import TitleBreak from "../components/titleBreak";
import { CloudinaryContext } from "cloudinary-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import About from "../components/about";

const options = {
  bgOpacity: 0.8,
  zoom: false,
  counter: false,
};

const cloudName = process.env.REACT_APP_CLOUD_NAME;

const randomSizeClass = () => {
  const sizes = ["thumbnail-small", "thumbnail-medium", "thumbnail-large"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const Galleri = () => {
  const [images, setImages] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("NewYork_partier");

  useEffect(() => {
    const fetchImages = async () => {
      console.log(`Requesting images from folder: ${selectedFolder}`);
      try {
        const res = await axios.get(`/api/images?folder=${selectedFolder}`);
        const filteredImages = res.data.filter(
          (img) => img.format === "jpg" || img.format === "jpeg"
        );
        setImages(filteredImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };

    fetchImages();
  }, [selectedFolder]);

  return (
    <div>
      <Header />
      <TitleBreak
        title={"Galleri"}
        subtitle={"Se vores arbejde"}
        bgClass={"bg-darker"}
        titleColor={"text-light"}
        subtitleColor={"text-gray-400"}
      />
      <select
        value={selectedFolder}
        onChange={(e) => setSelectedFolder(e.target.value)}
        className="select-style xl:w-1/4 w-3/4 lg:w-1/3"
      >
        <option value="Baade">Både</option>
        <option value="Bede_udendors">Bede Udendørs</option>
        <option value="Brusevaegge">Brusevægge</option>
        <option value="Gelaendere_og_altaner">Gelændere og Altaner</option>
        <option value="Glasvaern_indendors">Glasværn Indendørs</option>
        <option value="Glasvaern_udendors">Glasværn Udendørs</option>
        <option value="Gulv_glas">Gulv Glas</option>
        <option value="Montering_af_stålkonstruktioner">
          Montering af Stålkronstruktioner
        </option>
        <option value="NewYork_partier">New York Partier</option>
        <option value="Porte">Porte</option>
        <option value="Vinrum">Vinrum</option>
      </select>
      <CloudinaryContext cloudName={cloudName}>
        <Gallery options={options}>
          <div className="flex justify-center w-full">
            <div className="w-9/12">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
              >
                <Masonry gutter="10px">
                  {images.map((img) => (
                    <div key={img.public_id}>
                      <Item
                        original={img.secure_url}
                        thumbnail={`${img.secure_url}?q_auto,f_auto,w_300`}
                        width={img.width}
                        height={img.height}
                        alt={img.public_id}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={`${img.secure_url}?q_auto,f_auto,w_300`}
                            alt={img.public_id}
                            loading="lazy"
                            style={{ width: "100%", display: "block" }}
                          />
                        )}
                      </Item>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </Gallery>
      </CloudinaryContext>
      <div className="py-8"></div>
      <About />
    </div>
  );
};

export default Galleri;

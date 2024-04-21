import React from "react";
import Header from "../components/header";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import Title from "../components/title";

const options = {
  bgOpacity: 0.8,
  zoom: false,
  counter: false,
};

const Galleri = () => {
  return (
    <div>
      <Header />
      <Title title={"Galleri"} titleColor={"text-light"} />
      <Gallery
        plugins={(pswpLightbox) => {
          const captionPlugin = new PhotoSwipeDynamicCaption(pswpLightbox, {
            captionContent: (slide) => slide.data.alt,
          });
        }}
        options={options}
      >
        <Item
          original="https://placekitten.com/1024/768?image=1"
          thumbnail="https://placekitten.com/1024/768?image=1"
          width="1024"
          height="768"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/1024/768?image=1"
            />
          )}
        </Item>
        <Item
          original="https://placekitten.com/1024/768?image=2"
          thumbnail="https://placekitten.com/1024/768?image=2"
          width="1024"
          height="768"
          alt="Photo of seashore by Folkert Hello"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/1024/768?image=2"
            />
          )}
        </Item>
      </Gallery>
    </div>
  );
};

export default Galleri;

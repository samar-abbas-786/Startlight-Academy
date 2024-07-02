import React, { useState } from "react";
import data from "../ArrayOfImages/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About1 = () => {
  const [show, setShow] = useState(false);
  const [imageId, setImageId] = useState(0);
  function handleLeft(currentId) {
    setImageId(currentId === 0 ? data.length - 1 : currentId - 1);
  }
  // {
  //   setInterval(handleLeft, 2000);
  // }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
        className="container w-full px-2  "
      >
        <h2 className="heading">About Us</h2>
        <h2 className="">--------⭐---------</h2>
        <motion.p
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: "0.8",
            delay: "0.2",
          }}
          className="para"
        >
          Welcome to StarLight AcadeMy, where learning is an adventure! Our
          online school is dedicated to providing a dynamic, engaging, and
          interactive educational experience for children. We believe that every
          child has the potential to shine, and our mission is to nurture that
          potential with high-quality, accessible, and personalized education.
        </motion.p>
        <h2 className="heading">Mission</h2>
        <h2 className="">--------🎯---------</h2>
        {show === false ? (
          <button
            className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md"
            onClick={() => setShow(!show)}
          >
            Show More{" "}
          </button>
        ) : null}

        {show === true ? (
          <div className="para">
            At StarLight AcadeMy, our mission is to inspire a lifelong love of
            learning. We strive to create a supportive and inclusive environment
            where students can explore their interests, develop critical skills,
            and grow both academically and personally.
            <br></br>
            <button
              className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-md"
              onClick={() => setShow(!show)}
            >
              Show Less{" "}
            </button>
          </div>
        ) : null}
      </motion.div>
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
        className="images-section pt-16 pb-8 relative  "
      >
        {data && data.length > 0 ? (
          <div className="image-item flex flex-col items-center w-full">
            {data.map((image) =>
              imageId === image.id ? (
                <img
                  onClick={() => handleLeft(image.id)}
                  className="single-image"
                  key={image.id}
                  src={image.url}
                  alt=""
                  srcset=""
                />
              ) : null
            )}
          </div>
        ) : (
          <div>No Image Found</div>
        )}
      </motion.div>
    </div>
  );
};

export default About1;

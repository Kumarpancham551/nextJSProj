"use client"
import React from 'react';
import banneerImage from "../../assets/login.svg"
import Image from 'next/image';
const BannerSection = () => {
    return (
        <div className="bg-blue-500 text-white py-8 text-center">
          <div className="container mx-auto">
            <Image
              src={banneerImage}  // Replace with the actual path to your image
              alt="Banner Image"
              className="mx-auto mb-4 rounded-full w-32 h-32"
            />
            <h1 className="text-4xl font-bold mb-4">Your Banner Heading</h1>
            <p className="text-lg mb-8">Banner Subtitle</p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-100">
              Action Button
            </button>
          </div>
        </div>
      );
};

export default BannerSection;

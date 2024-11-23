import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Manual = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:mr-4">
        <Navbar />
      </div>
      <main className="overflow-auto h-screen w-full">
        Manual
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 gap-5">
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="shadow-xl my-10 p-5 sm:p-10 rounded-xl">
            <h4>Post Title</h4>
            <Image
              src="/path/to/image.jpg"
              width={400}
              height={400}
              alt="image"
              priority
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Manual;

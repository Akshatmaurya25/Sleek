import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-wh1">
      <div className=" bg-gray-900 flex items-center justify-center">
        <p>&#169; Ashutosh and Akshat, 2023</p>
      </div>
      <div className="flex h-fit items-center">
        <div className="logo-container w-fit">
          <h2 className="lobster gdc1 text-[60px]">Sleek</h2>
        </div>
        <div className="vl"></div>
        <div className="p-4 flex flex-col-reverse gap-4">
          <div>

          <h4 className="font-bold">Address</h4>
          <p>
            Rajiv Gandhi Proudyogiki Vishwavidyalaya Airport Bypass Road,
            Bhopal, Madhya Pradesh -462033
          </p>
          </div>
          <div>

          <h4 className="font-bold">Our Mails</h4>
          <p>
            <p>akshatmaurya25@gmail.com</p>
            <p>falconmishra@gmail.com</p>
          </p>
          </div>
        </div>
        <div className="vl"></div>
        <div>
          <h4 className="font-bold">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab
            impedit ad tenetur veritatis eaque, fuga accusamus officiis, nobis
            eos dignissimos, voluptates possimus nulla dolore!
          </p>
        </div>
      </div>
    </div>
  );
};

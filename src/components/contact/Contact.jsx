import React from "react";


const Contact = () => {
  return (
    <section className="py-10 mt-10 bg-blue-50">
      <div className="flex flex-col items-center gap-5 page-container md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-center text-blue-500 uppercase md:text-left md:text-4xl ">
            Contactate con Nosotros
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Cualquier infomarcion contacte con nosotros
          </p>
        </div>
        <div className="flex flex-col flex-1 w-full gap-4">
          <input
            className="w-full p-3 bg-white border-2 border-blue-500 border-solid rounded-md "
            type="text"
            placeholder="Enter your email..."
          />
          <textarea
            placeholder="Write something...."
            className="w-full p-3 bg-white border-2 border-blue-500 border-solid rounded-md resize-none"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import React, { Fragment, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GrMailOption } from "react-icons/gr";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading("Enviando mensaje", { id: "1" });

    if (nameRef.current && emailRef.current && messageRef) {
      const res = await fetch("http://localhost:3000/api/message", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current?.value,
        }),
      });

      if (res.ok) {
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
        
        // console.log(res);
        toast.success("Mensaje enviado exitosamente", { id: "1" });
        return res;
      } else {
        const errorData = await res.json();
        toast.error("Hubo un error al enviar el mensaje, intenta nuevamente", { id: "1" });
        throw new Error(errorData.message || "An error occurred");
        // console.log(errorData);
      }

    }
  };

  return (
    <div>
        <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center relative"
      >
        <input
          type="text"
          placeholder="Nombre..."
          ref={nameRef}
          className="font-manjari placeholder:text-secondary-color bg-light-color border-primary-color border py-3 px-4 my-2 text-lg text-dark-color"
        />
        <input
          type="text"
          placeholder="Email..."
          ref={emailRef}
          className="font-manjari placeholder:text-secondary-color bg-light-color border-primary-color border py-3 px-4 my-2 text-lg text-dark-color"
        />
        <textarea
          placeholder="Mensaje..."
          rows={4}
          ref={messageRef}
          className="font-manjari placeholder:text-secondary-color bg-light-color border-primary-color border py-3 px-4 my-2 text-lg text-dark-color"
        />

        <div className="relative my-4">
          <span className="absolute top-0 left-0 w-full h-full dark:bg-light-color bg-dark-color"></span>
          <button
            type="submit"
            className="py-2.5 px-5 bg-accent-color 
            relative -left-1 -top-1 z-20 h-fit w-fit 
            active:-left-0 active:-top-0
            flex flex-row gap-4"
          >
            <GrMailOption className="text-2xl text-dark-color" />
            <p className="text-2xl text-dark-color font-manjari">
              Enviar
            </p>
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

const Userform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sendSuccess, setSendSuccess] = useState(false);

  const sendFormData = async (data, error) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
    reset();
    setSendSuccess(true);
  };
  return (
    <section id="contacts" className="md:col-span-2">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform flex flex-col pt-16 max-w-md mx-auto"
      >
        <label className="text-th-primary text-sm">Your name</label>
        <input
          placeholder="Your name*"
          type="text"
          {...register("name", { maxLength: 30, required: true })}
        />
        {errors.email?.type === "required" && (
          <span className="error-span">Please, enter your name</span>
        )}
        <label className="text-th-primary text-sm mt-6">Email</label>
        <input
          placeholder="example@email.com"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <span className="error-span">Please, enter your email</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error-span">Please, enter valid email</span>
        )}
        <label className="text-th-primary text-sm mt-6">Phone</label>
        <input
          type="tel"
          placeholder="+(044) 797 57 77"
          {...register("phone", {
            required: true,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.phone?.type === "required" && (
          <span className="error-span">Please enter your phone number</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error-span">Please enter a valid phone number</span>
        )}
        <label className="text-th-primary text-sm mt-6">Message</label>
        <input
          aria-multiline
          type="text"
          placeholder="I am..."
          defaultValue=""
          {...register("message")}
        />
        {sendSuccess && (
          <span className="success-span">
            Thanks, your data was processed successfully!
          </span>
        )}
        <button type="submit" className="btn-primary btn-lg mx-auto mt-12">
          Send
        </button>
      </form>
    </section>
  );
};

export default Userform;

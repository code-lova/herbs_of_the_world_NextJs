"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import images from "@/public/images";
import LoaderButton from "../core/buttons/LoaderButtons";
import { sendPasswordResetRequest } from "@/services/request/auth/sendPasswordResetRequest";
import { forgotPasswordSchema } from "@/schema/forgotpassword";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

interface emailProps {
    email: string;
}

const ForgotPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate, isSuccess } = useMutation({
    mutationFn: sendPasswordResetRequest,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success("A password reset link has been sent to your email!");
      setLoading(false);
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (values: emailProps) => {
    mutate(values.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={images.logodark}
            width={120}
            height={60}
            alt="herb of the world logo"
            className="object-contain w-[98px] h-[80] md:w-24 "
          />
          <h1 className="text-2xl font-bold mb-1 text-center uppercase blue_gradient">
            Forgot your Password{" "}
          </h1>
        </div>
        <h2 className="text-md font-bold mb-6 text-center">
          Enter valid email address
        </h2>

        {!isSuccess ? (
          <Formik
            initialValues={{ email: "" }}
            validationSchema={forgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form-input peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <LoaderButton
                  loading={loading}
                  loadingText="Processing..."
                  type="submit"
                  text="Send Password Reset Link"
                />
              </Form>
            )}
          </Formik>
        ) : (
          <p className="text-center text-custom-green font-semibold mt-6">
            A Password reset link has been sent to your email address!
            <br /> Please check your inbox.
          </p>
        )}

        <div className="mt-4 flex flex-row justify-between">
          <Link
            href="/"
            className="flex items-center text-custom-green hover:text-green-700 transition-colors duration-300"
          >
            <span className="mr-2">&#8592;</span>
            <p>Go Back</p>
          </Link>

          <Link
            href="/signin"
            className="flex items-center text-custom-green hover:text-green-700 transition-colors duration-300"
          >
            <p>SignIn</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

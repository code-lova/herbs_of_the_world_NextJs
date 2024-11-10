"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/public/images";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registrationSchema } from "@/schema/register";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "@/services/request/auth/registerRequest";
import LoaderButton from "../core/buttons/LoaderButtons";
import { RegisterData } from "@/types";

const SignUp = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: registerRequest,
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },
    onSuccess: () => {
      toast.success("A verification link was sent to your email");
      // Redirect or further actions here
      navigate.push("/success")
      setLoading(false); // Optionally reset loading state
    },
    onError: () => {
      const errorMessage = "An unexpected error occurred";
      toast.error(errorMessage);
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (values: RegisterData) => {
    mutate(values);
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
          <h1 className="text-2xl font-bold mb-4 md:mb-10 text-center text-gray-700 blue_gradient">
            Get Started with few easy steps{" "}
          </h1>
        </div>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="max-w-md mx-auto">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-input peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstname"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-input peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastname"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-input peer"
                  placeholder=" "
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
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="confirmPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <LoaderButton
                loading={loading}
                loadingText="Creating account..."
                text="Create account"
                type="submit"
              />
            </Form>
          )}
        </Formik>

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
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

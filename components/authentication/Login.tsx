"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/public/images";
import { loginSchema } from "@/schema/login";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/services/request/auth/loginRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import LoaderButton from "../core/buttons/LoaderButtons";
import { loginProps } from "@/types";
import { useUserContext } from "@/context/UserContext";

const Login = () => {
  const { user, refetchUser } = useUserContext();
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: loginRequest,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      toast.success("Login successfully");
      await refetchUser();
      setLoading(false);
    },
    onError: () => {
      toast.error("Invalid email or password");
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  useEffect(() => {
    // Navigate based on the user role after refetchUser completed
    if (user) {
      if (user.role === "admin") {
        navigate.push("/admin");
      } else if (user.role === "user") {
        navigate.push("/");
      }
    }
  }, [user, navigate]);

  const handleSubmit = (values: loginProps) => {
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
          <h1 className="text-2xl font-bold mb-1 text-center uppercase blue_gradient">
            Welcome Back{" "}
          </h1>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Guest</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
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
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-input peer"
                  placeholder=" "
                  required
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
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4  rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-custom-green hover:text-green-700"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <LoaderButton
                loading={loading}
                loadingText="Processing..."
                type="submit"
                text="Login account"
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
            href="/signup"
            className="flex items-center text-custom-green hover:text-green-700 transition-colors duration-300"
          >
            <p>SignUp</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

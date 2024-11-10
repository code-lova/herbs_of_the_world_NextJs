"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import images from "@/public/images";
import LoaderButton from "../core/buttons/LoaderButtons";
import { resetPasswordRequest } from "@/services/request/auth/resetPasswordRequest";
import { resetPasswordSchema } from "@/schema/resetpassword";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassordProps } from "@/types";

const ResetPassword = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const exp = searchParams.get("exp");

  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (code && exp) {
      const currentTime = Date.now();
      if (currentTime < Number(exp)) {
        setIsValid(true);
      } else {
        toast.error("The reset link has expired. Please request a new one.");
        navigate.push("/forgot-password");
      }
    }
  }, [code, exp, navigate]);

  const handleSubmit = (values: resetPassordProps) => {
    if (!code || !isValid) {
      toast.error("Invalid or expired reset link.");
      return;
    }
    mutate({ ...values, resetVerificationCode: code });
  };

  const { mutate } = useMutation({
    mutationFn: resetPasswordRequest,
    onMutate: () => setLoading(true),
    onSuccess: () => {
      toast.success("Password reset successful!");
      navigate.push("/signin");
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to reset password.");
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

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

        {isValid && (
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="max-w-md mx-auto">
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
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-input peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm Password
                  </label>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <LoaderButton
                  loading={loading}
                  loadingText="Processing..."
                  type="submit"
                  text="Reset password"
                />
              </Form>
            )}
          </Formik>
        )}

        <div className="mt-4 flex flex-row justify-between">
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

export default ResetPassword;

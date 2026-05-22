'use client';

import { Button, Description, FieldError, Input, Label, TextField } from '@heroui/react';

import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import Image from 'next/image';

import toast from 'react-hot-toast';
import { authClient, signIn } from '@/lib/auth-client';

export default function LoginPage() {
  

  const handelLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    // console.log(formData)

    const loginData = Object.fromEntries(formData.entries());
    // console.log(loginData)

    const { data, error } = await signIn.email({
      ...loginData,
      callbackURL: "/"
    })

    
    if (error) {
      toast.error("Registration failed");
      return;
    }
    // router.push("/")

  }
  const handelGoogleSignin = async() => {
  await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className=" p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Welcome <span className="text-blue-600">Back</span>
              </h2>
              <p className="text-slate-500 font-medium">Continue your room booking today</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handelGoogleSignin}
                variant="bordered"
                className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5"
                  alt="Google"
                />
                Sign in with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className=" px-4 text-slate-400 font-bold tracking-widest">Or with email</span>
              </div>
            </div>

            <form
              className="space-y-6"
              onSubmit={handelLogin}
            >
              <div className="space-y-2">
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com"
                    className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14  w-full rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              <div className="space-y-2">
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    if (!/[a-z]/.test(value)) {
                      return "Password must contain at least one lowercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }
                    return null;
                  }}
                >
                  <Label>Password</Label>
                  <Input  placeholder="Enter your password"
                    className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14  w-full rounded-2xl"
                  />
                  <Description className='text-black/80'>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                  <FieldError />
                </TextField>

              </div>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 transition-all"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                color="primary"
                type="submit"
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
              >
                Sign In <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                New to CourseHub?{' '}
                <Link
                  href="/register"
                  className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
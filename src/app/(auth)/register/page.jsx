'use client';

import { Button, Description, FieldError, Input, Label, TextField } from '@heroui/react';

import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {

  const router = useRouter();

  const handelRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    // console.log(formData)

    const registerData = Object.fromEntries(formData.entries());
    // console.log(registerData)

    const { data, error } = await signUp.email({
      ...registerData,
    })

    if (error) {
      toast.error("Registration failed");
      return;
    }
    router.push("/")

  }

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50 py-12">
      <div className="grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Join <span className="text-blue-600">StudyNook</span>
              </h2>
              <p className="text-slate-500 font-medium">Create your account to booking room</p>
            </div>

            <form
              className="space-y-6"
              onSubmit={handelRegister}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  name="name"
                  // startContent={<User className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

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
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                   />
                  <FieldError />
                </TextField>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Profile Image URL
                </label>
                <Input
                  id="image"
                  placeholder="https://images.unsplash.com/..."
                  type="url"
                  name="image"
                  // startContent={<User className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
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
                  <Input placeholder="Enter your password"
                    className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                  />
                  <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                  <FieldError />
                </TextField>
              </div>

              <Button
                color="primary"
                type="submit"
                // isLoading={loading}
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
              >
                Create Account <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
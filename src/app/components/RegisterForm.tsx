"use client";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { createCell } from "../../../utils/actions";
import { useActionState } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const RegisterForm = () => {
  const [message, formAction] = useActionState(createCell, null); //[ข้อความที่ได้จาก server, action]

  return (
    <div className="flex items-center justify-center gap-y-4">
      <div className="grid grid-cols-2 gap-x-3">
        <Link href="/login">Login</Link>
        <Link href="/register">Sign up</Link>
      </div>
      <form
        action={formAction}
        className=" text-xl grid grid-cols-2 items-center justify-center gap-x-4"
      >
        <div className="grid">
          Email
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="border"
          />
        </div>
        <div className="grid">
          Password
          <input
            placeholder="Password"
            type="text"
            name="surname"
            className="border"
          />
        </div>
        <div className="grid">
          Password
          <input
            placeholder="Password"
            type="text"
            name="surname"
            className="border"
          />
        </div>
        <div className="grid">
          Password
          <input
            placeholder="Password"
            type="text"
            name="surname"
            className="border"
          />
        </div>
        <div className="grid">
          Password
          <input
            placeholder="Password"
            type="text"
            name="surname"
            className="border"
          />
        </div>
        <div className="grid">
          Password
          <input
            placeholder="Password"
            type="text"
            name="surname"
            className="border"
          />
        </div>
        <SubmitButton />
      </form>
      {message && <h1>{message}</h1>}
    </div>
  );
};
export default RegisterForm;

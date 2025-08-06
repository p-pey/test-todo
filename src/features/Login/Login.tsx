import { useState } from "react";
import AuthService from "../../services/Auth.service";
import { LoginSchema } from "./schema";

const LoginInputs = {
  username: "username",
  password: "password",
} as const;

export default function Login() {
  const [errors, setErrors] = useState<
    Record<keyof typeof LoginInputs, string | null>
  >({
    password: null,
    username: null,
  });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setErrors({ password: null, username: null });
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    LoginSchema.parseAsync({ username, password })
      .then(() => {
        const Auth = new AuthService();
        Auth.login();
        window.location.reload();
      })
      .catch((e) => {
        const zodErrors = JSON.parse(e.message) as {
          message: string;
          path: string[];
        }[];
        zodErrors.forEach((error) => {
          const path = error.path[0];
          if (path in errors) {
            setErrors((prev) => ({ ...prev, [path]: error.message }));
          }
        });
      });
  };
  console.log(errors);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow-2xl w-[500px] flex flex-col"
      >
        <h2 className="text-xl font-bold text-black">ورود </h2>
        <div className="flex flex-col my-10 gap-4">
          <div className="flex flex-col gap-3">
            <label className="text-black text-md font-bold">نام کاربری</label>
            <input
              name={LoginInputs.username}
              className="border p-2 w-full border-gray-300 outline-0 rounded-lg text-gray-950"
              type="text"
              placeholder="user123"
            />
            <span className="text-sm text-red-600 font-bold">
              {errors[LoginInputs.username]}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-black text-md font-bold">رمزعبور</label>
            <input
              className="border p-2 w-full border-gray-300 outline-0 rounded-lg text-gray-950"
              placeholder="12345678"
              type="password"
              name={LoginInputs.password}
            />
            <span className="text-sm text-red-600 font-bold">
              {errors[LoginInputs.password]}
            </span>
          </div>
        </div>
        <button
          type="submit"
          role="button"
          className="bg-blue-600 text-white grow py-2 rounded-lg hover:bg-blue-700"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

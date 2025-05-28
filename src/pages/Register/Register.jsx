import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Input from "./../../components/Input/Input";
import { useAuthContext } from "../../context/Auth/AuthContext";
import useFetcher from "../../hooks/useFetcher";
import Swal from "sweetalert2";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { registerUser } = useAuthContext();
  const { addUser } = useFetcher();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerUser(data.email, data.password);
    if (res.user) {
      const result = await addUser({ email: res.user.email });

      if (result.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "User created successfully!",
          icon: "success",
        });
      }
    }
  };
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div>
          <Link
            to="/"
            className="btn btn-ghost text-[#374151] hover:btn-primary hover:text-accent text-xl"
          >
            <ArrowLeft /> Back to home
          </Link>
        </div>
        <div>
          <div className="bg-[#F4F3F0] p-5 rounded-[5px] mt-10">
            <div className="text-center">
              <h3 className="text-3xl text-[#374151] font-medium mb-3">
                Register
              </h3>
              <p className="w-2/3 mx-auto leading-7">
                It is a long established fact that a reader will be
                distraceted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of
                letters, as opposed to using Content here.
              </p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="w-3/4 flex flex-col items-center gap-y-5 mx-auto mb-5">
                  <Input
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={data.email}
                    handleChange={handleChange}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="********"
                    value={data.password}
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
                  <button className="btn btn-primary w-full text-accent text-xl border-2 border-accent">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddUser() {
  const [f_name, setFname] = useState("");
  const [m_name, setMname] = useState("");
  const [l_name, setLname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo , setPhoto] = useState("");

  const CLOUD_NAME = "your cloudinary name here";
  const UPLOAD_PRESET = "your cloudinary preset here";


  const router = useRouter();
  
  async function handleSubmit(e) {
    e.preventDefault();

    if(!f_name || !l_name || !age || !phone || !email || !password || !photo){
      alert("All fields are needed except middle name if you don't have!!!")
      return
    }

    //const newUser = {
    //  f_name,
    //  m_name,
    //  l_name,
    //  age,
    //  phone,
    //  email,
    //  password,
    //};
    const imgUrl = await uploadImage();

    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({f_name, m_name, l_name, age, phone, email, password, imgUrl}),
    });
    if (response.status == 201) {
      router.refresh()
      router.push("/");
    }
    
  }
  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imgUrl = data["secure_url"];

      return imgUrl;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">

    <div className="row justify-content-center">

      <div className="col-md-5">

        <div className="card border-success shadow mt-5 ">

          <div className="card-body bg-transparent">

            <h1 className="text-center text-success mb-4">Add User</h1>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="text-success">First Name</label>
                <input
                  onChange={(e) => setFname(e.target.value)}
                  value={f_name}
                  type="text"
                  className="form-control shadow-none border-success text-success"

                />
              </div>

              <div className="mb-3">
                <label className="text-success">Mddle Name</label>
                <input
                  onChange={(e) => setMname(e.target.value)}
                  value={m_name}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Last Name</label>
                <input
                  onChange={(e) => setLname(e.target.value)}
                  value={l_name}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Your Age</label>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Phone No</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Email Address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Your Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  className="form-control shadow-none border-success text-success"
                />
              </div>

              <div className="mb-3">
                <label className="text-success">Image Upload</label>
                <input
                  onChange={(e) => setPhoto(e.target.files[0])}
                  type="file"
                  className="form-control shadow-none border-success text-success"
                />
              </div>


              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-outline-success">
                  Add User
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </div>
  );
}

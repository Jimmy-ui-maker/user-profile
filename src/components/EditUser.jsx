"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditUsers({ id, f_name, m_name, l_name, age, phone, password }) {
  const router = useRouter();
  const [newFName, setNewFName] = useState(f_name);
  const [newMName, setNewMName] = useState(m_name);
  const [newLName, setNewLName] = useState(l_name);
  const [newAge, setNewAge] = useState(age);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPassword, setNewPassword] = useState(password);

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      newFName,
      newMName,
      newLName,
      newAge,
      newPhone,
      newPassword,
    };
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (response.status == 201) {
      router.push("/");
      router.refresh();
    }
    console.log(newUser);
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-success shadow mt-5 ">
            <div className="card-body bg-transparent">
              <h1 className="text-center text-success mb-4">Update User</h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="text-success">First Name</label>
                  <input
                    onChange={(e) => setNewFName(e.target.value)}
                    value={newFName}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-success">Last Name</label>
                  <input
                    onChange={(e) => setNewMName(e.target.value)}
                    value={newMName}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-success">Last Name</label>
                  <input
                    onChange={(e) => setNewLName(e.target.value)}
                    value={newLName}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-success">Last Name</label>
                  <input
                    onChange={(e) => setNewAge(e.target.value)}
                    value={newAge}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-success">Last Name</label>
                  <input
                    onChange={(e) => setNewPhone(e.target.value)}
                    value={newPhone}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-success">New Password</label>
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="text"
                    className="form-control shadow-none border-success text-success"
                  />
                </div>


                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-success">
                    Update User
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

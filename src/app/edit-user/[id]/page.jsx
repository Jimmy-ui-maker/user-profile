import getSingleUser from "@/app/controller/getSingleUser";
import EditUsers from "@/components/EditUser";
import React from "react";

export default async function EditUser({ params: { id } }) {
  const user = await getSingleUser(id);
  const {f_name, m_name, l_name, age, phone, password} = user
  return (
    <>
      <EditUsers id={id} f_name={f_name} m_name={m_name} l_name={l_name} age={age} phone={phone} password={password}/>
    </>
  );
}
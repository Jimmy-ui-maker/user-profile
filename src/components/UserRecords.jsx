import getUsers from "@/app/controller/getUsers";
import Link from "next/link";
import React from "react";

export default async function UserRecords() {
  const users = await getUsers();
  //console.log(users)

  return (
    <>
      <section id="product">
        <div className="container p-5">
          <div class="section-title">
            <h2>You Might Like</h2>
            <p>Newly Added user</p>
          </div>

          <div className="row g-3 mb-5">
            {users?.map((user) => {
              return (
                <div key={user._id} className="col-6 col-md-4 col-lg-3 mb-4 ">
                  <div className="card">
                    <Link href={`/details/${user._id}`}>
                      <img src={user.imgUrl} className="card-img-top " />
                    </Link>
                  </div>

                  <h4 className="mt-2 mb-0">Last Name: {user.l_name}</h4>
                  <p className="leade m-0">Middle Name: {user.m_name}</p>
                  <p className="leade m-0">first Name: {user.f_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}

import getSingleUser from "@/app/controller/getSingleUser";
import DeleteBtn from "@/components/DeleteBtn";
import Link from "next/link";

export default async function ViewUser({ params: { id } }) {
  const user = await getSingleUser(id);
  return (
    <section id="product">
      <div className="container p-5">
        <div class="section-title">
          <h2 className="text-center text-success">User details Page</h2>
        </div>

        <hr />  

        <div className="row g-3 mb-5  justify-content-center align-items-center">
          <div className="col-6 col-md-4 col-lg-3 mb-4 ">
            <div className="card">
                <img src={user.imgUrl} className="card-img-top " />
            </div>

            <p className="mt-2 mb-0 text-success">
              <span className=" text-secondary">Last Name:</span> {user.l_name}
            </p>
            <p className="leade m-0 text-success">
              <span className=" text-secondary">Middle Name:</span>{user.m_name}
            </p>
            <p className="leade m-0 text-success">
              <span className=" text-secondary">First Name:</span> {user.f_name}
            </p>
            <p className="leade m-0 text-success">
              <span className=" text-secondary">Current Age:</span> {user.age}
            </p>
            <p className="leade m-0 text-success">
              <span className=" text-secondary">Phone Number:</span> {user.phone}
            </p>

            <div className=" d-flex justify-content-between align-items-center">
              <DeleteBtn id={user._id} />

              <Link
                href={`/edit-user/${user._id}`}
                className="btn btn-outline-success"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

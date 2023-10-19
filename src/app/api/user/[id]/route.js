import mongoDBConnect from "@/lib/mongodb";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    // Connect to the DB
    await mongoDBConnect();
    //get the data using the model
    const user = await Users.findOne({ _id: id });
    return NextResponse.json(
      {
        message: "Ok",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

//Update/EDITING a Course
export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const {
      newFName: f_name,
      newMName: m_name,
      newLName: l_name,
      newAge: age,
      newPhone:phone,
      newPassword: password,
    } = await request.json();
    const newUser = {
      f_name,
      m_name,
      l_name,
      age,
      phone,
      password,
    };
    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to update
    await Users.findByIdAndUpdate(id, newUser);
    return NextResponse.json(
      {
        message: "User Updated successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

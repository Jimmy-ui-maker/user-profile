import mongoDBConnect from "@/lib/mongodb";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

// GET ALL COURSES
export async function GET() {
  try {
    // Connect to the DB
    await mongoDBConnect();
    //get the data using the model
    const users = await Users.find();
    return NextResponse.json({ message: "Ok", data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch User", error },
      { status: 500 }
    );
  }
}

//Create a Course
export async function POST(request) {
  try {
    //Get the data from the request
    const { f_name, m_name, l_name, age, phone, email, password, imgUrl  } = await request.json();
    const newUser = {
      f_name,
      m_name,
      l_name,
      age,
      phone,
      email,
      password,
      imgUrl,
    };
    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to create
    await Users.create(newUser);
    return NextResponse.json(
      {
        message: "User created successfully",
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

// DELETE A COURSE
export async function DELETE(request) {
  try {
    //Get the Id of the course
    const id = request.nextUrl.searchParams.get("id");
    //Connect to db
    await mongoDBConnect();
    //Use the model to delete
    await Users.findByIdAndDelete(id);
    //return the response
    return NextResponse.json(
      {
        message: "User deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Delete a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

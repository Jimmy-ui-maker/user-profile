export default async function getSingleUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      cache: "no-store",
    });
    const user = await response.json();
    return user.data;
  } catch (error) {
    console.log(error);
  }
}

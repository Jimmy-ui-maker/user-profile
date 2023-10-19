export default async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      cache: "no-store",
    });
    const users = await response.json();
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

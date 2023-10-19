"use client";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
  const router = useRouter();

  async function handleDeleteUser() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/user?id=${id}`, {
        method: "DELETE",
      });
      router.refresh();
      router.push('/')
    }
  }
  return (
    <button className="btn btn-outline-danger" onClick={handleDeleteUser}>
      Delete
    </button>
  );
}

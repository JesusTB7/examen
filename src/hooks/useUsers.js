import { useEffect, useState } from "react";
import { getAllUsers } from "../services/UserService";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log("DATA", data);
      setUsers(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
}
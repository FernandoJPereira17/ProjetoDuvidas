import { useEffect, useState } from "react";
import axios from "axios";

export function useHomePage() {

  const [users, setUsers] = useState([]);

  const url = "https://6580c89c3dfdd1b11c421714.mockapi.io/clientes";

  const fetchUsers = async () => {
    const users = await axios.get(url);
    setUsers(users.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
}

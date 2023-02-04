import { useState, useEffect } from "react";
import axios from "axios";
const Instance = axios.create({
  baseURL: "https://portfolio-serverless-func.vercel.app/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default function useServer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState(null);

  async function getData() {
    const { data } = await Instance("/api/getProjects");
    try {
      if (data) {
        setItems(data);
        setLoading(false);
        setError("");
      }
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    items,
    loading,
    error,
  };
}

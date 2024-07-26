import React, { useEffect, useState } from "react";
import { GETDOCUMENTATION } from "../config/apiUrl";

const Documentation = () => {
  const [documentation, setDocumentation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocumentatonData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(GETDOCUMENTATION);
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        console.log('data', data);
        setDocumentation(data);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentatonData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("documentation", documentation);
  return (
    <div>
      <h1>Documentation</h1>
      <p>{documentation}</p>
    </div>
  );
};

export default Documentation;

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";

export default function Home() {
    const [status, setStatus] = useState("checking...");

    useEffect(() => {
        fetch(`${API_BASE_URL}/health`)
            .then((res) => res.json())
            .then((data) => setStatus(data.status))
            .catch(() => setStatus("backend error"));
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>Backend status: {status}</p>
        </div>
    );
}

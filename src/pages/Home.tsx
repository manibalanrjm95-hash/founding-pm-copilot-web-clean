import { useEffect } from "react";
import { API_BASE } from "../config/api";

export default function Home() {
    useEffect(() => {
        console.log("API BASE:", API_BASE);

        fetch(`${API_BASE}/health`)
            .then((res) => res.json())
            .then((data) => {
                console.log("✅ Backend connected:", data);
            })
            .catch((err) => {
                console.error("❌ Backend error:", err);
            });
    }, []);

    return <h1>Home</h1>;
}

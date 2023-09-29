"use client";
import 'tailwindcss/tailwind.css';
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Usuarios from "@/pages/usuarios";

export default function Home() {
  return (
      <div className="flex flex-row ">
        <div className="flex-1 ">
          <Dashboard />
        </div>
      </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup"
import { Login } from "./Login.jsx"
import { LogoutLink } from "./LogoutLink.jsx"
import { Routes, Route } from "react-router-dom"


export function Content() {
  

  
return (
  <div>
      
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
    </Routes>
  </div>
  )
}
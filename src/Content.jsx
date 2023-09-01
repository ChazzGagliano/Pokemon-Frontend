import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { Routes, Route } from "react-router-dom"
import { RegionsIndex } from "./RegionsIndex"
import { CollectionsIndex } from "./CollectionsIndex"


export function Content() {
    const [regions, setRegions] = useState([]);
    const handleIndexRegions = () => {
        axios.get('http://localhost:3000/region.json').then(response => {
          console.log(response.data)
          setRegions(response.data)
    
        })
      }
    
    useEffect(handleIndexRegions, [])

    const [collections, setCollections] = useState([])
    const handleIndexCollections = () => {
        axios.get('http://localhost:3000/collections.json').then(response => {
            console.log(response.data)
            setCollections(response.data)
        })
    }
    
    useEffect(handleIndexCollections, [])

return (
  <div>
      
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/" element={<RegionsIndex regions={regions}/>}  />
        <Route path="/collections" element={<CollectionsIndex collections={collections}/>} />
    </Routes>
  </div>
  )
}
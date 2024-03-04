import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";
export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropDown, setShowdropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);
  async function fetchUserData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      if (result?.users?.length) {
        setUser(result.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  function handleChange(e) {
    const typedData = e.target.value.toLowerCase();
    setSearch(typedData);
  
    if (typedData.length > 0) {
      const filteredData = user?.length
        ? user.filter((item) => item.toLowerCase().includes(query))
        : [];
      setFilteredUser(filteredData);
      setShowdropDown(true);
    } else {
      setShowdropDown(false);
    }
  }
  console.log(search,user,filteredUser);
  function handleClick(event){
    setShowdropDown(false);
    setSearch(event.target.innerText);
    setFilteredUser([]);
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  if (loading) {
    return <div>Loading data please wait</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <input
        value={search}
        placeholder="Search here......"
        onChange={handleChange}
      />
      {showDropDown && <Suggestion data={filteredUser} handleClick={handleClick} />}
    </div>
  );
}

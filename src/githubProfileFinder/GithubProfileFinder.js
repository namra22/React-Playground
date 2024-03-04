import React, { useState, useEffect } from "react";
import User from "./User";
import './style.css';
export default function GithubProfileFinder() {
  const [profile, setProfile] = useState("namra22");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  function handleProfileSearch() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${profile}`);
      const result = await response.json();
      if (result) {
        setData(result);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <div>Data is loading.Please wait</div>;
  }
  if(error){
    return <div>{error}</div>
  }
  return (
    <div className="github-container">
      <div className="input-container">
        <input
          placeholder="Search Username"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        ></input>
        <button onClick={handleProfileSearch}>Search</button>
      </div>
      {data!==null ? <User user={data} />:null}
    </div>
  );
}

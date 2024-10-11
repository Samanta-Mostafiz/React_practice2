import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
    const[manualSearch,setManualSearch]=useSearchParams();

  const [params, setSearchParams] = useSearchParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
  };


  return (
    <div>
        <p>for manual query search</p>
        <h2>{manualSearch.get('id')}</h2>
        <h2>{manualSearch.get('city')}</h2>
        <h2>{manualSearch.get('country')}</h2>



      <h1>learning useSearchParam for search query</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">find user</button>
      </form>

    </div>
  );
};

export default Users;

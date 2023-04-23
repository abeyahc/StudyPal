import logo from './logo.svg';
import './App.css';
import './pages/About';
import "./styles.css"
import React from 'react';
import Navbar from "./Navbar"

import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';




const GET_STUDY_GROUPS = gql`
 query GetStudyGroups($searchText: String!) {
  study_group(where: {class: {_ilike: $searchText}}) {
    id
    class
    students_in_groups {
      student {
        name
        major
      }
    }
  }
}
`;

function App() {
  const [search, setSearch] = useState('')

  const { loading, error, data } = useQuery(
    GET_STUDY_GROUPS,
    {
      variables: {
        searchText: `%${search}%`
      }
    }
  );

  return (
    // navbar
    <div className="App">
       <>
        <Navbar />
       </>



      
      <input
        value={search}
        onChange={e => setSearch(e.target.value)} 
        placeholder="Search"
      />
        {data?.study_group?.map(studyGroup => (
          <>
            <h2>{studyGroup.class}</h2>
            <ul>
            {studyGroup?.students_in_groups?.map(
              s => (<li>{s.student.name}</li>)
              )}
            </ul>
          </>
        ))}
        <p> here are all the classes with students </p>
    </div>
  );
}

export default App;
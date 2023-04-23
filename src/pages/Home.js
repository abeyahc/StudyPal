import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import React from 'react';

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


export default function Home() {
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
    <div>
        <h1 className="home"><b>Home</b></h1>
        <div className="centered">
            <ol>
            <input
            value={search}
            onChange={e => setSearch(e.target.value)} 
            placeholder="Search"
            className="searchbar"
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
            </ol>
        </div>    
    </div>
    );
}
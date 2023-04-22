import logo from './logo.svg';
import './App.css';

import { useQuery, gql } from '@apollo/client';

const GET_STUDY_GROUPS = gql`
 {
  study_group {
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
  const { loading, error, data } = useQuery(GET_STUDY_GROUPS);

  return (
    <div className="App">
      <ul>
        {data?.study_group?.at(0)?.students_in_groups?.map(
          s => (<li>{s.student.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;

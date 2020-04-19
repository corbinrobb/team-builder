import React, { useState } from 'react';
import Form from './component/Form';
import Member from './component/Member';

const App = () => {
  const [ members, setMembers ] = useState([]);

  return (
    <div>
      <Form members={members} setMembers={setMembers} />
      {members.map(member => {
        return <Member name={member.name} email={member.email} role={member.role} />
      })}
    </div>
  );
}

export default App;
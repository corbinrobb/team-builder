import React, { useState, useEffect } from 'react';
import Form from './component/Form';
import './App.css';
import MemberList from './component/MemberList';

const App = () => {
  const [ members, setMembers ] = useState([
    { name: 'Steve', email: 'steve@email.com', role: 'CEO' },
    { name: 'Hannah', email: 'hannah@email.com', role: 'Owner' },
    { name: 'Sara', email: 'sara@email.com', role: 'CTO' }
  ]);
  const [ memberToEdit, setMemberToEdit ] = useState(null);

  const edit = (member) => {
    setMemberToEdit(member);
  }

  return (
    <div>
      <Form setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} setMembers={setMembers} members={members} setMembers={setMembers} />
      <MemberList edit={edit} setMembers={setMembers} members={members} />
    </div>
  );
}

export default App;
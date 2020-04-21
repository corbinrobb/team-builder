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
  const [ memberToRemove, setMemberToRemove ] = useState(null);

  const edit = (member) => {
    setMemberToEdit(member);
  }

  const remove = (member) => {
    setMemberToRemove(member)
  }

   const removeMember = (key) => {
    let arr = [...members];
    arr.splice(key, 1)
    setMembers(arr);
  }

  return (
    <div>
      <Form setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} setMembers={setMembers} members={members} />
      <MemberList removeMember={removeMember} edit={edit} setMembers={setMembers} members={members} />
    </div>
  );
}

export default App;
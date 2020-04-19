import React, { useState, PureComponent } from 'react';

const Form = ({ members, setMembers }) => {
  const [ newMember, setNewMember ] = useState({
    name: '', email: '', role: ''
  })

  const handleChange = (e) => {
    setNewMember({...newMember, [e.target.name]: e.target.value})
  }

  const submitMember = (e) => {
    e.preventDefault();
    setMembers([...members, newMember]);
    setNewMember({
      name: '', email: '', role: ''
    });
  }

  return (
    <form onSubmit={submitMember}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={newMember.name}
        onChange={handleChange}
       />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        value={newMember.email}
        onChange={handleChange}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        type="text"
        value={newMember.role}
        onChange={handleChange}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default Form;
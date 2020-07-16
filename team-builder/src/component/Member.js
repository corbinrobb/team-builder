import React from 'react';

const Member = (props) => {
  const { name, email, role } = props.member;

  return (
    <div className="member">
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Role: {role}</h3>
      <button onClick={() => { props.removeMember(props.id) }}>
        Remove
      </button>
      <button onClick={() => props.edit(props.member)}>
        Edit
      </button>
    </div>
  );
}

export default Member;
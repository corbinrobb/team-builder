import React, { useState } from 'react';
import Member from './Member';

const MemberList = (props) => {

  const removeMember = (key) => {
    let a = props.members;
    a.splice(key, 1)
    props.setMembers([...a]);
  }

  return (
    <div className="member-container">
      {props.members.map((member, id) => {
        return <Member edit={props.edit} removeMember={removeMember} key={id} id={id} member={member} />
      })}
    </div>
  );
}


export default MemberList;
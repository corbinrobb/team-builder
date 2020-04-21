import React from 'react';
import Member from './Member';

const MemberList = (props) => {

  return (
    <div className="member-container">
      {props.members.map((member, id) => {
        return <Member removeMember={props.removeMember} edit={props.edit} key={id} id={id} member={member} />
      })}
    </div>
  );
}


export default MemberList;
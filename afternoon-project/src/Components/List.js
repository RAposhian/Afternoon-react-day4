import React from 'react';
import UserData from './UserData'

const List = (props) => (<div>{props.users.map((e, i) => (i === props.id) ? <UserData key={i} user={e}/> : null)}</div>)


export default List;
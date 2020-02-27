import React from 'react';
import "../UserData.css"

const UserData = props => {
   return (
      <div>
         <h1 className="Name">{props.user.name.first} {props.user.name.last}</h1>
         <div className="first-list">
            <p><span className="list-item">From:</span> {props.user.city}, {props.user.country}</p>
            <p><span className="list-item">Job Title:</span> {props.user.title}</p>
            <p><span className="list-item">Employer:</span> {props.user.employer}</p>
         </div>
         <div className="second-list">
            <h3>Favorite Movies:</h3>
            <div className="movies">
               <p>1. {props.user.favoriteMovies[0]}</p>
               <p>2. {props.user.favoriteMovies[1]}</p>
               <p>3. {props.user.favoriteMovies[2]}</p>
            </div>
         </div>
      </div>
      )
}


export default UserData;
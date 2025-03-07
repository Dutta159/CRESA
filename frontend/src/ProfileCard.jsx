import React from 'react'
export default function ProfileCard(){
  return(
    <div className="profile-card h-50 w-50 border rounded-lg justify-center text-center m-5">
      <div className="profile-card__image border rounded-sm h-1/2 w-47   m-auto mt-2 "></div>
      <div className="profile-card__info">Position</div>
      <div className="profile-card__info">Name</div>
      <div className="profile-card__info">Name</div>
    </div>
  )
}
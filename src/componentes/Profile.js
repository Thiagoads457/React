import React, { useState, useEffect } from 'react';
import Bach from '../img/Bach.jpeg';
import './Profile.css';
import Avatar from './Avatar';

function Profile() {
  return (
    <div>

      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <img
        src={Bach}
        alt="Johann Sebastian Bach"
        className="profile-img"
      />

    </div>

  );
}

export default Profile;

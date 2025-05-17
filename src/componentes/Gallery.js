import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery-container">
      
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
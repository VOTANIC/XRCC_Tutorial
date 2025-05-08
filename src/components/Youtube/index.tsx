import React from 'react';
import styles from './styles.module.css';

export default function YouTube ({ id } : { id : string }){
    return (
      <div>
        <iframe
          className={styles.youtubeVideo}
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    );
  };
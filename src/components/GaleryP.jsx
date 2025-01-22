import React from 'react'
import img2 from '../assets/galeria/tatuaje_antebrazo2.jpg'
import img3 from '../assets/galeria/tatuaje_dragonball.jpg'
import img5 from '../assets/galeria/tatuaje_letras.jpg'
import img6 from '../assets/galeria/tatuaje_sukuna.jpg'
import img7 from '../assets/galeria/tatuaje_runas.jpg'
import img8 from '../assets/galeria/tatuaje_dragon.jpg'
import img9 from '../assets/galeria/tatuaje_bote.jpg'
import img10 from '../assets/galeria/tatuaje_astronauta.jpg'
import img11 from '../assets/galeria/tatuaje_centauro.jpg'
const data = [
  
  {
    imageLink: img2,
    alt: "tatuaje antebrazo"
  },
  {
    imageLink: img3,
    alt: "tatuaje dragonball"
  },
  
  {
    imageLink: img5,
    alt: "tatuaje letras"
  },
  {
    imageLink: img6,
    alt: "tatuaje sukuna"
  },
  {
    imageLink: img7,
    alt: "tatuaje runas"
  },
  {
    imageLink: img8,
    alt: "tatuaje dragon"
  },
  {
    imageLink: img9,
    alt: "tatuaje bote"
  },
  {
    imageLink: img10,
    alt: "tatuaje astronauta"
  },
  {
    imageLink: img11,
    alt: "tatuaje centauro"
  },
];

export function GaleryP() {
  return (
    <div className='bg-gray-900 p-10'>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink,alt }, index) => (
        <div key={index}>
          <img
            className="h-80 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt={alt}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default GaleryP
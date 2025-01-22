import React from 'react'
import personal from '../assets/personal.jpeg'

const Description = () => {
  return (
    <div className="  ">
    <div className='grid grid-cols-1 gap-4  md:grid-cols-2  '>
        <div className='p-10'>
            <h2 className='text-3xl font-bold  '>
                Sobre mi
            </h2>
            <p className=' pt-10'>
            Soy Argenis de Jesús Barrios Petit, conocido en el ámbito del tatuaje como ARGA. Con 27 años de edad y originario del Estado Zulia, Venezuela, me he dedicado a la profesión del tatuaje desde los 24 años. Mi pasión por el arte corporal se refleja en cada pieza que creo, combinando técnica y creatividad para ofrecer a mis clientes tatuajes únicos y personalizados.
            </p>
        </div>
        <div > 
            <img src={personal}
            alt="argatattostudio"
            className="h-full w-full object-cover"
            />
        </div>
        


    </div>
    </div>
  )
}

export default Description
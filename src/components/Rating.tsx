import React from 'react'


interface Props{
  score: number;
}

const Rating = ({ score }: Props) => {
  const color = score > 75 ? ' bg-green-500 ' : score > 60 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="absolute bottom-2 right-2">
      <div className={`
        ${color}
        inline-flex 
        items-center 
        px-2 
        py-1 
        rounded-lg 
        text-base 
        font-semibold 
        text-white
        shadow-md
      `}>
        {score}
      </div>
    </div>
  )
}

export default Rating
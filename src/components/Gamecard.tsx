import React from 'react'
import { Game } from './Gamegrid';
import Platform_icon from './ui/Platform_icon';
import Rating from './Rating';
import CroppedImages from '@/services/CroppedImages';


interface Props{
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white text-2xl text-black relative" >
      <img 
        src={CroppedImages(game.background_image)} 
        alt={game.name}
        className="w-full h-48 object-center overflow-hidden"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.name}</div>
      </div>
      <  Platform_icon platform={game.parent_platforms.map(p => p.platform)} />
      < Rating score={game.metacritic} />
    </div>
  ) 
}

export default Gamecard

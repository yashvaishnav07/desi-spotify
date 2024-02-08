import React from 'react'
import Card from "./Card";

const PlaylistCard = ({ name, description, imgUrl }) => {
  const head = (
    <img
      src={imgUrl}
      className="w-1/6"
    />
  );
  return (
    <Card className={`overflow-hidden`} head={head}>
      <div className='flex flex-col justify-center items-start w-full mx-3'>
        <div className="text-white">{name}</div>
        <div className="text-zinc-500">{description}</div>
      </div>
    </Card>
  )
}

export default PlaylistCard

import React from 'react'

interface LinkProps {
    title: string;
    thumbnail: string;
  }

const LinkCard: React.FC<LinkProps> = ({title,thumbnail}) => {
  return (
    <div className='w-[80vw] md:w-[30vw] h-8 md:h-20 bg-main-purple1 mt-3 flex justify-center items-center rounded-md py-7'>LinkCard</div>
  )
}

export default LinkCard
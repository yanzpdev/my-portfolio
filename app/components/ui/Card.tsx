import React from 'react'

type CardProps = {
  className?: string;
  children: React.ReactNode;
  style?: object;
}

const Card:React.FC<CardProps> = ({className, children, style}) => {
  return (
    <figure
      className={className}
      style={style}
    >
      {children}
    </figure>
  )
}

export default Card
import React, { useLayoutEffect, useRef, useState } from 'react'

export const Pokemoncard = ({id, name, sprites = []}) => {

  const h2Ref = useRef();
  const [BoxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
  
    const {height, width} = h2Ref.current.getBoundingClientRect();
    setBoxSize({height, width});
 
  }, [name]);

  return (
    <secton style={{height: 200, display:'flex', flexDirection:'row'  }} >
      <h2 ref={h2Ref} className="text-capitalize" >#{id}-{name}</h2>
        

      <div>
        {
          sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
          ))
        }
      </div>

      <pre>
        {JSON.stringify(BoxSize)}
      </pre>
    </secton>
  )
}

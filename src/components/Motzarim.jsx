import React from 'react'

const Motzarim = (list) => {
  return (
    <div className='Motzarim'>{list.map(p =>
        <div className='Motzarim'>
            <p>{p.name}</p>
            <p>{p.price}ש"ח</p>
             <p>{p.code}</p>
        </div>
    )}</div>
  )
}

export default Motzarim
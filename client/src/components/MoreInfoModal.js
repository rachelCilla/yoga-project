// modal that displays more info about selected yoga pose
import React from 'react'

const mode='edit'

export default function MoreInfoModal() {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div>
          <h3>More Info</h3>
          <button>X</button>
        </div>
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
    </div>
    </div>
  )
}


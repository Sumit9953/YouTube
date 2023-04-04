import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Cricket","Soccer","News","Cooking","Study","Gate 2024","Comedy"
]

const ButtonList = () => {
  return (
    <div className='flex'>
        {list.map((name) => <Button name={name} /> )}
    </div>
  )
}

export default ButtonList
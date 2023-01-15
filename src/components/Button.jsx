import React from 'react'

function Button({handleClick, children}) {
    console.log('Rendering button -', children)
  return (
    <div>
      <Button onClick={handleClick}>
        {children}
      </Button>
    </div>
  )
}

export default React.memo(Button)

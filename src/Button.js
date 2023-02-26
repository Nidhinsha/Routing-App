import React from 'react'
import className  from 'classnames'

const finalClassName = className({
        'bg-blue-500':true
})

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
  return (
    <div>
      <button className='px-3 py-1.5 border border-blue-500 text-white bg-blue-500'>{children}</button>
    </div>
  )
}

Button.propTypes = {
    checkVariationValue : ({primary,secondary,warning,danger,success}) =>{
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

            if(count >1){
                return new Error(
                    'Only  one of the primary,secondary,success,warning,danger can be true'
                )
            }
    }
}

export default Button

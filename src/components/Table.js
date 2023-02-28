import React from 'react'

function Table({data,config}) {

    const renderedHeader = config.map((column)=>{
        return <th key={column.label}>{column.label}</th>
    })

    const renderdRows = data.map((fruit)=>{
        return (
            <tr key={fruit.name} className='border-b'>
                <td className='p-3'>{fruit.name}</td>
                <td className='p-3'>
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className='p-3'>{fruit.score}</td>
                
            </tr>
        )
    })
  return (
    <div>
     <table className='table-auto border-spacing-2'>
        <thead>
            <tr className='border-b-2'>
                {renderedHeader}
            </tr>
        </thead>
        <tbody>
            {renderdRows}
        </tbody>
     </table>
    </div>
  )
}

export default Table
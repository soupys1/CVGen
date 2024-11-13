import React from 'react'

export default function Project(props) {
  return (
    <div className='text-black dark:text-black container mt-6 px-4 border rounded-sm  flex flex-col  justify-between'>
      <form  className='flex flex-col mt-7 gap-2 w-100 ' onSubmit={props.handleSubmit}>
      <textarea  className=' border mx-1  mt-5 mb-2  border-black rounded-sm' type="text" placeholder='Skills' name='skills' value={props.data.skills} onChange={props.handleSetData} disabled={!props.editing}/>
      <input  className=' border mx-1  mt-5 mb-2  border-black rounded-sm' type="text" placeholder='Portfolio Link' name='PortfolioLink' value={props.data.PortfolioLink} onChange={props.handleSetData} disabled={!props.editing}/> 
      <input className=' border mx-1 my-2  border-black rounded-sm'type="text" placeholder='github Link' name='githubLink' value={props.data.githubLink}  onChange={props.handleSetData} disabled={!props.editing}/> 
      <button className='h-10 px-5 mx-5 my-2 text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-white hover:text-black' type="Submit" onClick = {props.handleToggleEditing}>{props.editing ? 'Submit' : 'Edit' }</button>
      
    </form>
    </div>
  )
}

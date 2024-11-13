import {React,useState} from 'react'

export default function Pracexp(props) {
   

  return (
    <div className='container mt-6 px-4 border rounded-sm  flex flex-col  justify-between text-black dark:text-black'>
       <form  className='flex flex-col mt-7 gap-2 w-100' onSubmit={props.handleSubmit}>
        <input  className=' border mx-1 mt-5 mb-2  border-black rounded-sm' type="text" placeholder='Company Name' name='companyName' value={props.companyName} onChange ={props.handleSetData} disabled={!props.editing}/> 
        <input  className=' border mx-1  my-2  w-max-full border-black rounded-sm'type="text" placeholder='Position Title' name='positionTitle' value={props.positionTitle} onChange ={props.handleSetData} disabled={!props.editing}/>
        <textarea  className=' border mx-1  my-2  h-96 border-black rounded-sm' type="Text" placeholder='Main Responsibilities'name='responsibilities' value={props.responsibilities} onChange ={props.handleSetData}  disabled={!props.editing}/> 
        <input  className=' border mx-1  my-2  border-black rounded-sm' type="Date" placeholder='Start Date 'name='joinDate' value={props.joinDate} onChange ={props.handleSetData} disabled={!props.editing}/> 
        <input  className=' border mx-1  my-2  border-black rounded-sm' type="Date" placeholder='End Date'name='leavingDate' value={props.leavingDate} onChange ={props.handleSetData} disabled={!props.editing}/> 
        <button className='h-10 px-5 mx-5 my-2 text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-white hover:text-black' type="Submit" onClick = {props.handleToggleEditing}>{props.editing ? 'Submit' : 'Edit'}</button>
        
      </form>
    </div>
  )
}

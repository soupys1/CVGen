import {React} from 'react'

export default function Geninfo(props) {
 
  
  
  
  return (
    <div className='text-black dark:text-black container mt-6 px-4 border rounded-sm  flex flex-col  justify-between'>
      <form  className='flex flex-col mt-7 gap-2 w-100 ' onSubmit={props.handleSubmit}>
      <input className=' border mx-1  mt-5 mb-2  border-black rounded-sm' type="text" placeholder='First Name' name='firstName' value={props.data.firstName} onChange={props.handleSetData} disabled={!props.editing}/> 
      <input className=' border mx-1  my-2  border-black rounded-sm' type="text" placeholder='Last Name' name='lastName' value={props.data.lastName}  onChange={props.handleSetData} disabled={!props.editing}/> 
      <input className=' border mx-1  my-2   border-black rounded-sm' type="text" placeholder='Email' name='email' value={props.data.email}  onChange={props.handleSetData} disabled={!props.editing}/>
      <input className=' border mx-1  my-2   border-black rounded-sm' type="text" placeholder='Phone No' name='phone' value={props.data.phone}  onChange={props.handleSetData} disabled={!props.editing}/> 
      <button className='h-10 px-5 mx-5 my-2 text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-white hover:text-black' type="Submit" onClick = {props.handleToggleEditing}>{props.editing ? 'Submit' : 'Edit'}</button>
      
      </form>
      
    </div>
  )
}


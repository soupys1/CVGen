import React, { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Geninfo from './Components/Geninfo'
import Pracexp from './Components/Pracexp'
import Eduexp from './Components/Eduexp'
import Project from './Components/Project';



function App() {
  
  const[genInfoEditing , setGenInfoEditing] = useState(true);
  const[eduExpEditing , setEduExpEditing] = useState(true);
  const[pracExpEditing , setPracExpEditing] = useState(true);
  const[projEditing , setProjectEditing] = useState(true);
  const[bg,setBg] = useState(true);
  const[addP,setAddP] = useState(false);
  const[addE,setAddE] = useState(false);
  const[addT,setAddT] = useState(false);
  const[addR,setAddR] = useState(false);
  const [plus,setPlus] = useState(false);

  const[ data , setData ] = useState(
    {firstName : '', 
    lastName : '', 
    email : '', 
    phone : '',
    schoolName : '',
    Course : '',
    date : '',
    companyName : '',
    positionTitle : '',
    responsibilities : '',
    joinDate : '',
    leavingDate : '',
    PortfolioLink: '',
    githubLink : '',
    skills : ''
   }
  );
  
  function handleToggleEditing(section){
    if (section === 'general')  setGenInfoEditing(!genInfoEditing);
    if (section === 'education')  setEduExpEditing(!eduExpEditing);
    if (section === 'experience')  setPracExpEditing(!pracExpEditing);
    if (section === 'project') setProjectEditing(!projEditing);
  }
 
  function handleSetData(e){
    const {name,value} = e.target;
    setData(
      {...data, 
      [name] : value,}
    );
  }
  function handleSetDataDelete(e){
    const {name} = e.target
    setData({...data,
      [name] : ''
    });
  }
  function handleDownloadPDF() {
    const element = document.getElementById('pdf-section'); 
    const options = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save(); 
  };

  function handleSetAddP(){
    setAddP(!addP);
  }
  function handleSetAddE(){
    setAddE(!addE);
  }
  function handleSetAddT(){
    setAddT(!addT);
  }
  function handleSetAddR(){
    setAddR(!addR);
  }
  
  function handleToggleMode(){
    setBg(!bg);
  }

  function handleSubmit(e,section){
    e.preventDefault();
    console.log(data);
    switch(section){
      case"general":
        setGenInfoEditing(false);
        break;
      case "education":
        setEduExpEditing(false);
        break;
      case "experience":
        setPracExpEditing(false);
        break;
      case "project":
        setProjectEditing(false);
        break;
      default:
        break;
    }
    
  }


  
  return (
    <div className={`${bg ? 'bg-white text-black' : 'bg-gray-800 text-white'} min-h-screen transition-all duration-600`}>

    <Navbar bg={bg} handleToggleMode={handleToggleMode} handleDownloadPDF={handleDownloadPDF}/> <br/>
    <div className="grid grid-cols-3 gap-4 pl-4 pt-8  ">
    <div className=" container mx-auto px-4 border rounded-lg  col-span-1 mt-5 border-gray-1000 flex flex-col flex-wrap justify-between">
      <div className='pb-20'>
      <p className='text-3xl font-bold'>Personal Information <button onClick={handleSetAddP} className='mx-auto'>{!addP ? (<i class="fa-solid fa-angle-down"></i>) : (<i class="fa-solid fa-angle-up"></i>)}</button> </p> 
      {
        addP &&(
          <>
        
          <Geninfo editing = {genInfoEditing} data = {data} handleToggleEditing={() => handleToggleEditing('general')} handleSetData={handleSetData} handleSubmit={handleSubmit}/><br/>
       
          </>
        )
      }
      
      </div>
      
     
       
      <div className='pb-20'>
       <p className='text-3xl font-bold'>Education Information <button onClick={handleSetAddE} className='mx-auto'>{!addE ? (<i class="fa-solid fa-angle-down"></i>) : (<i class="fa-solid fa-angle-up"></i>)}</button> </p> 
        {
          addE && (
            <>
            <Eduexp  editing = {eduExpEditing} data = {data} handleToggleEditing={() => handleToggleEditing('education')} handleSetData={handleSetData} handleSubmit={handleSubmit}/><br/>
            </>
          )
        }
       </div>
       
       <div className='pb-20'>
       <p className='text-3xl font-bold'>Technical Skills <button onClick={handleSetAddT} className='mx-auto'>{!addT ? (<i class="fa-solid fa-angle-down"></i>) : (<i class="fa-solid fa-angle-up"></i>)}</button> </p> 
        {
          addT && (
            <>
            <Project editing = {projEditing} data = {data} handleToggleEditing={() => handleToggleEditing('project')} handleSetData={handleSetData} handleSubmit={handleSubmit}/><br/>
            </>
          )
        }
        
       </div>
       
       
       <div className='pb-20 '>
       <p className='text-3xl font-bold'>Work Experience  <button onClick={handleSetAddR} className='mx-auto'>{!addR ? (<i class="fa-solid fa-angle-down"></i>) : (<i class="fa-solid fa-angle-up"></i>)}</button> </p> 
        {
          addR && (
            <>
            <Pracexp editing = {pracExpEditing} data = {data} handleToggleEditing={() => handleToggleEditing('experience')} handleSetData={handleSetData} handleSubmit={handleSubmit}/><br/>
            
        
            </>
          )
        }
        
       </div>
      
       
       
       
      </div>
      <div className='mt-5 flex flex-col col-span-2 border-solid rounderd-sm ' id='pdf-section'>
       {!genInfoEditing && (
        <div className='' >
          <h3 className=" flex justify-center  text-3xl font-bold ">{data.firstName} {data.lastName}</h3>
          <p className='flex justify-center'>Email: {data.email}</p>
          <p className='flex justify-center'>Phone: {data.phone}</p>
          <hr class="h-1 bg-gray-400 "/>

        </div>
      )}

      {!eduExpEditing && (
        <div className='my-5'>
          <h3 className="text-3xl font-bold underline my-auto py-5  ">Educational Information:</h3>
          <p>School Name: {data.schoolName} </p>
          <p>Title of Study: {data.course}</p>
          <p className='pb-5'>Graduation Date: {data.date}</p>
          <hr class="h-1 bg-gray-400 "/>
        </div> 
      )}

      {!projEditing && (
        <div className='my-5'>
          <h3 className="text-3xl font-bold underline" >Technical Experience:</h3>
          <p>Skills : {data.skills}</p> 
          <p>github Link: {data.githubLink} </p>
          <p className='pb-5'>Portfolio Link:{data.PortfolioLink}</p>
          <hr class="h-1 bg-gray-400 "/>
        </div>
      )}
      {!pracExpEditing && (
        <div className='my-5'>
          <h3  className="text-3xl font-bold underline">Work Experience:</h3>
          <p>company Name: {data.companyName} </p>
          <p>position Title: {data.positionTitle}</p>
          <p>Roles and Responsibilities: {data.responsibilities}</p>
          <p>Join Date: {data.joinDate }</p>
          <p className='pb-5'>Leaving Date : {data.leavingDate}</p>
          <hr class="h-1 bg-gray-400 "/>
        </div>
      )}
      </div>
      
    </div>
    </div>
    
  )
}

export default App
 
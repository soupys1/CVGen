import React from 'react'


export default function Navbar(props) {
  return (
    <div className ={`fixed  shadow-sm ${props.bg ? 'bg-white text-black' : 'bg-gray-800 text-white'} flex items-center justify-between w-full border-b border-gray-800 p-2`} role='group'>
      <i className="fa-solid fa-file-export items-center"></i>
      <div className="inline-flex space-x-0" role="group" aria-label="Button group">
        <button onClick={props.handleDownloadPDF} 
        className={"h-10 px-5 text-ellipsis whitespace-nowrap text-indigo-100 rounded-l-lg transition-colors duration-150 bg-black focus:shadow-outline hover:bg-white hover:text-black"}>
          Print PDF
        </button>
        <button 
        onClick={props.handleToggleMode}
        className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-black rounded-r-lg focus:shadow-outline hover:bg-white hover:text-black">
        {!props.bg ? <i class="fa-regular fa-sun"></i>: <i class="fa-solid fa-moon"></i>}
        </button>
      </div>
    </div>
  ) 
}

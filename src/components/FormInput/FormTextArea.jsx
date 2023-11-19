import React from 'react'

const FormTextArea = ({id,title,handleChange,value,name,placeholder,required}) => {
  return (
    <div className="mx-2 flex flex-col gap-4">
    <div className="mt-3 h-6 text-xs font-bold uppercase text-gray-500">
   {title} {required && <span className="text-red-500">*</span>}
    </div>
    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
       <textarea 
        className=" w-full appearance-none p-1 px-2 text-gray-800 outline-none"
       
       id={id} rows="2" 
       onChange={handleChange}
       value={value}
       name={name}
       placeholder={placeholder}
       required={required}></textarea>
    </div>
    <span className='mt-[-20px] text-xs text-gray-500'> {value.split(/\s+/).length}/{300} word limit</span> 

  </div>
  )
}

export default FormTextArea
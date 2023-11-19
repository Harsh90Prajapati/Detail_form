
const FormDropdown = ({handleChange,value,name,required,data=[],title,placeholder}) => {
  return (
    <div className="mx-2  flex-1">
    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
   {title} {required && <span className="text-red-500">*</span>}
    </div>
    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
      {/* <input
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        accept={type==='file'?".pdf":''}
        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
      /> */}
      <select value={value} onChange={handleChange} className="w-full p-1 px-2 text-gray-800 outline-none" name={name} placeholder={placeholder} id="timeZone">
       <option value="" selected > please select {name} </option>
        {
            data.map((item,index)=>{
                return(
                    <option  key={index} value={item}>{item}</option>
                )
            })
        }
      </select>
    </div>
  </div>
  )
}

export default FormDropdown
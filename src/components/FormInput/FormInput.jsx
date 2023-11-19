
const FormInput = ({title,handleChange,value,name,placeholder,type,required}) => {
  return (
    <div className="mx-2  flex-1">
    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
   {title} {required && <span className="text-red-500">*</span>}
    </div>
    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
      <input
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        accept={type==='file'?".pdf":''}
        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
      />
    </div>
  </div>
  )
}

export default FormInput
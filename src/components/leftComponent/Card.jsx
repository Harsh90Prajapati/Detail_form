
const Card = ({title,desc}) => {
  return (
    <div className='flex items-center justify-center gap-4 py-4 border rounded-lg '>
        <div className='w-[70px] h-[70px] bg-gray-300 rounded-md'>
        </div>
        <div className='flex flex-col justify-start w-[280px]'>
            <h6 className="">{title}</h6>
            <small className="text-xs break-words">{desc}</small>
        </div>
    </div>
  )
}

export default Card
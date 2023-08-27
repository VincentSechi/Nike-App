const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-coral-red rounded-full hover:bg-white hover:border-coral-red transition duration-300
    hover:translate-x-2 hover:text-coral-red text-white-400 mt-10" 
    >
        {label}
        <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5 transition duration-500 hover:translate-x-3 hover:border-coral-red border border-transparent"
        />
    </button>
  )
}

export default Button

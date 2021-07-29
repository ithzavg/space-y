
const Pill = ({ social, name }) =>{
    return(
        <span className=" flex justify-center px-2 w-32 mr-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">
            <a href={social} target="_blank" rel="noreferrer">{name}</a>
        </span>
    )
}

export default Pill; 
/*Import next Components */
import Image from 'next/image';

const Card = ({ mission_name, date, wikipedia, image}) =>{
    return (
        <div className="border border-yellow-50 shadow-md rounded-md">
            <Image src={image} alt="Mission image" objectFit="cover" layout="responsive" width= {300} height={200} ></Image>
            
            <div className="p-2">
                <span className=" px-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">Mission</span>
                <p className=" text-white font-russo">{mission_name}</p>
                <a className="text-yellow-200 hover:text-yellow-700" href={wikipedia} target="_blank" rel="noreferrer" >Read more...</a>
                <p className="text-xs text-right text-white">{new Date(date).toLocaleDateString("es-MX")}</p>
            </div>
        </div>
    )
}

export default Card;
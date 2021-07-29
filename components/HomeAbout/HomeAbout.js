/*Import next Components */
import Image from 'next/image';

export default function HomeAbout({ about }){
    console.log(about)
    return(
        <section className=" min-h-screen fixed z-10 w-full flex flex-col justify-center  text-white">
           <div className="bg-gray-400 bg-opacity-75 w-full h-1/2 px-10 text-lg shadow">
                <p className="font-russo text-3xl  text-center">About</p>
                <p>{about.ceo}</p>
                <p className="mb-3">{about.summary}</p>

                <div>
                    <Image src="/assets/img/elonMusk.png"  width={50} height={50} alt="CEO Elon Musk"/>
                    <p>{about.ceo}</p>

                    <Image src="/assets/img/GwynneShotwell.png" width={50} height={50} alt="COO Gwynne Shotwell"></Image>
                    <p>{about.coo}</p>
                </div>
           </div>
            
        </section>
    )
}


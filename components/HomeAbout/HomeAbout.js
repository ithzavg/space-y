/*Import next Components */
import Image from 'next/image';

export default function HomeAbout({ about }){
    

    return(
        <section className=" min-h-screen fixed z-10 w-full flex flex-col justify-center  text-white">
           <div className="bg-gray-400 bg-opacity-75 w-full h-1/2 px-10 text-lg shadow">
                <p className="font-russo text-3xl  text-center">About</p>
                <p className="mb-3">{about.summary}</p>

                <p className="font-bold">CEO: {about.ceo}</p>
                <p className="font-bold">COO: {about.coo}</p>

                <div className="flex justify-center">
                    <Image className="mr-2" src="/elonMusk.png"  width={105} height={105} alt="CEO Elon Musk"/>
                    <Image className="object-center"  objectFit="fill" src="/GwynneShotwell.png" width={105} height={105} alt="COO Gwynne Shotwell"></Image>
                    
                </div>

                <div>
                    <p className="text-center font-bold">Find Space X on social media</p>

                    

                    <div className="flex mb-2 justify-center">
                        <span className=" px-2 mr-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">
                            <a href={about.links.elon_twitter} target="_blank" rel="noreferrer">Elon Twitter</a>
                        </span>
                        <span className=" px-2 mr-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">
                            <a href={about.links.flickr} target="_blank" rel="noreferrer">Flickr</a>
                        </span>
                        <span className=" px-2 mr-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">
                            <a href={about.links.twitter} target="_blank" rel="noreferrer">Twitter</a>
                        </span>
                        <span className=" px-2 mr-2 leading-none bg-yellow-700 text-yellow-200 rounded-full uppercase tracking-wide text-xs">
                            <a href={about.links.website} target="_blank" rel="noreferrer">Website</a>
                        </span>
                    </div>
                </div>
           </div>
            
        </section>
    )
}


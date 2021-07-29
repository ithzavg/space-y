/*Import next Components */
import Image from 'next/image';
import Pill from '../Pill/Pill';

export default function HomeAbout({ about }){
    

    return(
        <section className=" min-h-screen fixed z-10 w-full flex flex-col justify-center  text-white">
           <div className="bg-gray-400 bg-opacity-75 w-full h-1/2 px-10 text-lg shadow">
                <p className="font-russo text-3xl  text-center">About</p>
                <p className="mb-3">{about.summary}</p>

                <p className="font-bold">CEO: {about.ceo}</p>
                <p className="font-bold">COO: {about.coo}</p>

                <div className="flex justify-center  lg: flex-row">
                    <Image className="mr-2" src="/elonMusk.png"  width={105} height={105} alt="CEO Elon Musk"/>
                    <Image className="object-center"  objectFit="fill" src="/GwynneShotwell.png" width={105} height={105} alt="COO Gwynne Shotwell"></Image>
                    
                </div>

                <div className="mb-4">
                    <p className="text-center font-bold">Find Space X on social media</p>   
                </div>

                <div className="mb-3 flex w-full justify-center">
                    <Pill social={about.links.elon_twitter} name={"Elon Twitter"}></Pill>
                    <Pill social={about.links.flickr} name={"Flickr"}></Pill>
                    <Pill social={about.links.twitter} name={"Twitter"}></Pill>
                    <Pill social={about.links.website} name={"Website"}></Pill>
                </div>
           </div>
            
        </section>
    )
}


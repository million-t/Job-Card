'use client'
import { usePathname } from 'next/navigation';
import data from '../../dummyData/data.json';
import Image, { StaticImageData } from 'next/image';
import pluscircle from '../../../images/pluscircle.png';
import fire from '../../../images/fire.png';
import calcheck from '../../../images/calcheck.png';
import check from '../../../images/check.png';
import location from '../../../images/location.png';
import play from '../../../images/play.png';
import Tag from '@/components/tagChip';



export default function DetailsPage() {
    const pathname = usePathname();
    const parts = pathname.split('/');
    const id = parts[parts.length - 1]
    const item = data.find(job => job.id.toString() === id);

    if (!item){
        return <div className="text-mi min-h-screen flex justify-center py-8 space-x-16">No such item</div>;

    }

    return (
        <div className="text-mi min-h-screen flex justify-center py-8 space-x-16">
            <div className='flex-col max-w-dmi py-11 space-y-14'>
                <div className='flex-col space-y-4 '>
                    <p className=" text-2xl text-mi font-black">Description</p>
                    <p className='text-mi'>{item?.description}</p>
                </div>
                <div className='flex-col space-y-4 '>
                    <p className=" text-2xl text-mi font-black">Responsibilities</p>
                    <ul className='flex-col space-y-2'>
                        {item?.responsibilities.map((skill, index)=> (
                            <div className='flex space-x-2'>
                                <div className='flex justify-center w-5 h-5'><Image src={check} alt='Check Icon' width={20} height={20}></Image></div>
                                
                                <li>{skill}</li>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className='text-mi flex-col space-y-4 '>
                    <p className=" text-2xl  font-black">Ideal Candidate We Want</p>
                    <div>
                        <ul className='px-5 list-disc list-outside'>
                            {item?.wantedCandidate.map((qual, index)=>(
                                <li key={index}><p className='inline font-bold'>{qual[0]}</p>{qual[1] != "" ?<p className="inline">:</p>: <></>} <p className='inline'>{qual[1]}</p> </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className='text-mi flex-col space-y-6'>
                    <p className=" text-2xl  font-black">When & Where</p>
                    <div className='flex items-center space-x-4'>
                        <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                            <Image src={location} alt='plus-circle-icon' width={18} height={18}></Image>
                        </div>
                        
                        <p className="text-mi">{item.whenWhere}</p>
                    
                    </div>
                </div>
                

            </div>
            <div className='flex-col space-y-5 max-w-sp'>
                <p className=" text-2xl text-mi font-black">About</p>
                
                <div className='flex space-x-4 items-center'>
                    <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                        <Image src={pluscircle} alt='plus-circle-icon' width={18} height={18}></Image>
                    </div>
                    <div className='flex-col'>
                        <p className='text-about-gray'>Posted On</p>
                        <p className='font-semibold'>{item?.about['Posted On']}</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                        <Image src={fire} alt='plus-circle-icon' width={18} height={18}></Image>
                    </div>
                    <div className='flex-col'>
                        <p className='text-about-gray'>Deadline</p>
                        <p className='font-semibold'>{item?.about.Deadline}</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                        <Image src={location} alt='plus-circle-icon' width={18} height={18}></Image>
                    </div>
                    <div className='flex-col'>
                        <p className='text-about-gray'>Location</p>
                        <p className='font-semibold'>{item?.about.Location}</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                        <Image src={play} alt='plus-circle-icon' width={18} height={18}></Image>
                    </div>
                    <div className='flex-col'>
                        <p className='text-about-gray'>Start Date</p>
                        <p className='font-semibold'>{item?.about['Start Date']}</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className='flex w-11 h-11 items-center justify-center border border-divide-gray rounded-full'>
                        <Image src={calcheck} alt='plus-circle-icon' width={18} height={18}></Image>
                    </div>
                    <div className='flex-col'>
                        <p className='text-about-gray'>End Date</p>
                        <p className='font-semibold'>{item?.about['End Date']}</p>
                    </div>
                </div>

                <hr className=" h-px border-t-0 bg-divide-gray"/>

                <div className='flex-col space-y-6'>
                    <p className=" text-2xl text-mi font-black">Categories</p>
                    <div className='flex '>
                        {item?.categories.map((tag, index) => (
                            <Tag key={index} num={index} tag={tag} detail={true}></Tag>

                        ))}
                    </div>
                </div>

                <hr className=" h-px border-t-0 bg-divide-gray"/>
               
                <div className='flex-col space-y-6'>
                    <p className=" text-2xl text-mi font-black">Required Skills</p>
                    <div className='flex flex-wrap '>
                        {item?.requiredSkills.map((skill, index) => (
                            <div>
                                <div key={index} className=" bg-skill-gray px-2 text-violet-900 text-base py-2 mb-2 mr-2" >{skill}</div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}
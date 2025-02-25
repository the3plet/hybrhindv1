import datas from '../../data.json'
import {motion} from 'motion/react'

const AboutUs = () => {
  return (
<motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} transition={{duration:2}}>

    <div className='px-10' id='about'>
        <h2 className='flex justify-start text-3xl font-light '>Like to know about us</h2>
        <div className='md:flex gap-4'>
            {datas.aboutUs.map((data,index)=>(
              
              
              <p key={index} className=' text-lg font-extralight font-Karla py-4'>{data.description}</p>
              
              
            ))}
        </div>
    </div>
            </motion.div>
  )
}

export default AboutUs
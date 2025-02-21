import datas from '../../data.json'

const AboutUs = () => {
  return (
    <div className='px-10'>
        <h2 className='flex justify-start text-3xl font-light '>Like to know about us</h2>
        <div className='md:flex gap-4'>
            {datas.aboutUs.map((data,index)=>(


                <p key={index} className=' text-lg font-extralight font-Karla py-4'>{data.description}</p>

             
            ))}
        </div>
    </div>
  )
}

export default AboutUs
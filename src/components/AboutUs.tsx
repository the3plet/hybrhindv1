import datas from '../../data.json'

const AboutUs = () => {
  return (
    <div>
        <h2>Like to know about us</h2>
        <div>
            {datas.aboutUs.map((data,index)=>(

                <p key={index}>{data.description}</p>
            ))}
        </div>
    </div>
  )
}

export default AboutUs
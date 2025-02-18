import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import data from '../../data.json'


const IconScroll = () => {
  return (
    <Card className="rounded-none">
    <CardHeader>
      <CardTitle>From the house of</CardTitle>
    </CardHeader>
    <CardContent className="flex">
     {data.icons.map((icon,index)=>(
        <div key={index}>
            <img className="w-28 h-8 flex flex-col"  src={icon.iconPath} alt="company icon"/>
        </div>
     ))}
    </CardContent>
   
  </Card>
  )
}

export default IconScroll
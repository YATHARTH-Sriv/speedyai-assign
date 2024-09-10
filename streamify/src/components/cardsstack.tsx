
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardWithForm({title,description,value}:{title:string,description:string,value:string}) {
  return (
    <Card className="w-[300px] bg-white rounded-md">
      <CardHeader>
        <CardTitle className=" text-black">{title}</CardTitle>
        <CardDescription className=" text-black">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        { value && value==="Arijit Singh" ? <div className=" flex gap-2 text-black text-2xl">
                   {value} <img src="https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900" alt="" className="h-8 w-8 flex-shrink-0 rounded-full" width={32} height={32}/>
                  </div> : 
                  <div className=" text-black text-2xl">
                    {value}
                    </div>}
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
  )
}

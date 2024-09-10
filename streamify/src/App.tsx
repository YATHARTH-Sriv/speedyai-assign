
import { CardWithForm } from "./components/cardsstack";
import { IoStatsChart } from "react-icons/io5";
import { Component } from './components/charts'; 
import { Piecomponent } from "./components/piechart";
import { Linecomponent } from "./components/linechart";
import Streamtable from "./components/table";

function App() {
  return (
    <div className="bg-black">
      <h1 className='justify-center items-center text-white text-center text-4xl p-3'>Welcome to Streamify</h1>
      <div className="bg-black justify-center items-center p-4 text-white">
        <div className="flex flex-1">
          <div className="bg-black justify-center items-center flex flex-col gap-2 flex-1 w-full h-full">
            <div className="ml-10 m-2">
              <h1 className="p-2 m-3 text-2xl text-white flex gap-2">Key Metrics<IoStatsChart className="text-white" /></h1>
              <ul className="gap-3 p-2 flex">
                <li><CardWithForm title="Total Users" description="Registered number of users" value="1550" /></li>
                <li><CardWithForm title="Active Users" description="Users who have streamed at least once" value="500" /></li>
                <li><CardWithForm title="Total Streams" description="The total number of songs streamed" value="10,500" /></li>
              </ul>
              <ul className="gap-3 p-2 flex">
                <li><CardWithForm title="Revenue" description="Revenue Generated in last cycle" value="$1600" /></li>
                <li><CardWithForm title="Top Artist" description="Most Streamed Artist" value="Arijit Singh" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex gap-3 m-4 justify-center ">
        <Component /> 
        <Piecomponent /> 
        <Linecomponent/>
        </div>
        <div className="m-20 p-10">
        <Streamtable />
      </div>
      </div>
    </div>
  );
}

export default App;

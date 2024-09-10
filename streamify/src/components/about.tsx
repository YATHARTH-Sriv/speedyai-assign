import { CardWithForm } from "./cardsstack";
import { Component } from "./charts";
import { Piecomponent } from "./piechart";
import { Linecomponent } from "./linechart";
import Streamtable from "./table";

export function Data() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      {/* Metrics Section */}
      <div id="metrics" className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <p className="text-white text-lg font-semibold mb-10">Key Metrics</p>
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            {/* Grid layout for metrics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* First Row of Cards */}
              <CardWithForm title="Total Users" description="Registered number of users" value="1550" />
              <CardWithForm title="Active Users" description="Users who have streamed at least once" value="500" />
              <CardWithForm title="Total Streams" description="The total number of songs streamed" value="10,500" />

              {/* Second Row of Cards */}
              <CardWithForm title="Revenue" description="Revenue Generated in last cycle" value="$1600" />
              <CardWithForm title="Top Artist" description="Most Streamed Artist" value="Arijit Singh" />
            </div>
          </blockquote>
        </figure>
      </div>
      
      {/* Data Visualization Section */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <p id="data" className="text-white m-4 p-2 text-lg font-semibold ">Data Visualization</p>
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <Component />
            <Piecomponent />
            <Linecomponent />
          </blockquote>
        </figure>
      </div>
      
      {/* Data Table Section */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <p id="Table" className="text-white m-4 p-2 text-lg font-semibold ">Data Table</p>
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <Streamtable />
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

import React from 'react';
import Search from './search';
import Logout from './Logout';
import Btn from './btn';
import Del from './Del';
import GetBalance from './GetBalance';

const HomeData = () => {
    return (
      <div className="sm:w-[640px]   bg-zinc-950 rounded-md shadow-2xl mx-auto h-screen p-[2vw]">
        <div className='h-5/6 overflow-hidden'>
          <div className="  flex items-center pr-2">
            <Search />
            <div>
              <Logout />
            </div>
          </div>

          <div className="">
            <Btn trn={"/fr"} name={"friend"} />
          </div>
        </div>

        <nav className=" w-full   my-3">
          <div className="flex justify-evenly">
            <Btn trn={"/save"} name={"History"} />

            <Del />
            <GetBalance />
            <Btn trn={"/bal"} name={"Check balance"} />
          </div>
        </nav>
      </div>
    );
};

export default HomeData;
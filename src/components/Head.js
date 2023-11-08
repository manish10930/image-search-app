import React from 'react';
import SearchBox from './SearchBox';

function Head() {
  return (
    <div>
      <header className="bg-black p-4 fixed w-[100%]   top-0 z-50">
        <div className="container mx-auto">
          <h1 className='text-[#fff] text-center font-bold md:text-3xl'>Search Photos</h1>
          <div className="flex items-center justify-center">
            <div className="flex items-center mt-2">
              <SearchBox/>
              {/* <button className="ml-2 text-white">Search</button> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Head;

import React from 'react'
import { filterNavItems } from '../utils/Filter';
import Text from './Text';

export default function ShortNavList() {
  return (
    <>
      <div className="shadow w-[100%] flex  gap-4 items-center justify-center bg-white border-b-2 p-2 cursor-pointer">
        {filterNavItems("none")?.map((i) => (
          <div
            key={i._id}
            className="h-[20px]  p-2 flex flex-col items-center justify-center gap-2 hover:text-[blue]"
          >
            
            <Text name={i.title} customClass={"text-sm font-semibold "} />
          </div>
        ))}
      </div>
    </>
  );
}

import Text from '@/src/component/Text';
import Layout from '@/src/layout/Layout'
import { filterNavItems } from '@/src/utils/Filter';
import React from 'react'

export default function LoginPage() {
  return (
    <Layout customClass={"gap-0"}>
      <div className="shadow w-[100%] flex  gap-4 items-center justify-center bg-white rounded-md p-2 cursor-pointer">
        {filterNavItems("none")?.map((i) => (
          <div
            key={i._id}
            className="h-[20px]  p-2 flex flex-col items-center justify-center gap-2 hover:text-[blue]"
          >
            <Text name={i.title} customClass={"text-sm font-semibold "} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

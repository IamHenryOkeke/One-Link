import React from 'react'

const LoadingCard = () => {
  return (
    
<div role="status" className="w-full md:w-[70%] animate-pulse flex flex-col gap-3 item-center">
    <div className="w-[80%] h-16 bg-gray-300 flex justify-between items-center px-4 rounded dark:bg-gray-700">
        <div className="h-2.5 rounded-full mt-4 dark:bg-slate-500 w-48 md:w-60 mb-4"></div>
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>
    </div>
</div>

  )
}

export default LoadingCard

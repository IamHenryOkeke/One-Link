const ManageLinkCard = ({title, link, id, handleDelete}) => {
    return (
        <div className="bg-slate-700 cursor-pointer p-5 rounded-lg w-[80%] md:w-[60%] flex items-center justify-between">
            <a className="no-underline hover:underline capitalize font-bold text-sm md:text-lg" href={link} target="_blank" rel="noreferrer">
                {title}
            </a>
            <div className='flex gap-3'>
                <svg className='h-6 w-6 fill-white hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Update Link</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>
                <svg onClick={() => handleDelete(id)} className='h-6 w-6 fill-white hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Link</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
            </div>
        </div>
    )
}

export default ManageLinkCard

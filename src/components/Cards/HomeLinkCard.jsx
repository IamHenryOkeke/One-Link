const HomeLinkCard = ({title, link}) => {
    return (
        <a className="bg-slate-700 cursor-pointer p-5 rounded-lg w-[90%] md:w-[60%] flex items-center justify-between" href={link} target="_blank" rel="noreferrer">
            <span className="no-underline hover:underline capitalize font-bold text-sm md:text-lg">
                {title}
            </span>
            <svg className="w-7 h-7" data-v-47436778="" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs" role="presentation" focusable="false" tabIndex="-1"><path data-v-47436778="" d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
        </a>
    )
}

export default HomeLinkCard

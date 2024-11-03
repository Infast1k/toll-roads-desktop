export interface PaginationProps {
    inOnePage: number
    total: number
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    const activeStyle = "text-white font-semibold border border-primary-color border-solid bg-primary-color"

    return (
        <>
            <div className="justify-center items-center text-text-color mt-8">
                <ul className="list-none flex justify-center items-center h-10 mx-auto max-w-[600px] shadow-[0_0.8rem_2rem_rgba(#5a6181,0.05)] rounded-[0.5rem] bg-foreground-color">
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem]">
                        <span className="material-icons">
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M19.5 12H6" 
                                    stroke="#7287fd" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                />
                                <path 
                                    d="M11 17.5L5 12L11 6.5" 
                                    stroke="#7287fd"
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </li>   
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]"> 1</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]">2</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]">3</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]">4</li>
                    <li className={`flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem] ${activeStyle}`}>5</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]">6</li>
                    <li className="flex flex-col items-center justify-center m-[0.3rem] w-[2.6rem] h-[2.6rem] cursor-[initial]">...</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem]"> 10</li>
                    <li className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem]">
                        <span className="material-icons">
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24"
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M18.5 12H4" 
                                    stroke="#7287fd" 
                                    stroke-width="2"
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                />
                                <path 
                                    d="M13 6.5L18.5 12L13 17.5" 
                                    stroke="#7287fd" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Pagination

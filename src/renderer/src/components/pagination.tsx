import { useState } from "react"

export interface PaginationProps {
    inOnePage: number
    total: number
    offset: number
    setOffset: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    const defaultStyle = "flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem] rounded-[0.4rem] hover:bg-primary-hover-color"
    const activeStyle = defaultStyle + "text-white font-semibold border border-primary-color border-solid bg-primary-color rounded-[0.4rem] hover:bg-primary-hover-color"

    const pageCount = Math.ceil(props.total / props.inOnePage)
    const [currentPage, setCurrentPage] = useState(1)

    const changePage = (direction?: string, newPage?: number) => {
        if (direction === "next") {
            currentPage < pageCount ? setCurrentPage(currentPage + 1) : setCurrentPage(1)
            if (currentPage !== pageCount) {
                props.setOffset(props.offset + props.inOnePage)
                console.log("current page is ", currentPage)
            } else {
                props.setOffset(0)
            }
        } else if (direction === "prev") {
            currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(pageCount)
            if (currentPage > 1) {
                props.setOffset(props.offset - props.inOnePage)
                console.log("current page is ", currentPage)
            } else {
                props.setOffset(pageCount * props.inOnePage - props.inOnePage)
            }
        }
        if (newPage) {
            props.setOffset((newPage - 1) * props.inOnePage)
        }
    }

    const pages = Array.from({ length: pageCount }, (_, index) => {
        const page = index + 1
        return (
            <li
                key={page}
                className={page === currentPage ? activeStyle : defaultStyle}
                onClick={() => {
                    setCurrentPage(page)
                    changePage("", page)
                }}
            >
                <span>{page}</span>
            </li>
        )
    })

    return (
        <>
            <div className="justify-center items-center" >
                <div className="justify-center items-center text-text-color mt-8">
                    <ul className="list-none flex justify-center items-center h-10 mx-auto max-w-[500px] shadow-[0_0.8rem_2rem_rgba(#5a6181,0.05)] rounded-[0.5rem] bg-foreground-color">
                        {pageCount > 1 ? (
                            <li
                                className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem]"
                                onClick={() => changePage("prev")}
                            >
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
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                        <path 
                                            d="M11 17.5L5 12L11 6.5" 
                                            stroke="#7287fd"
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </li>
                        ) : (
                            <></>
                        )}
                        {pages}
                        {pageCount > 1 ? (
                            <li
                                className="flex flex-col items-center justify-center cursor-pointer m-[0.3rem] w-[2.6rem] h-[2.6rem]"
                                onClick={() => changePage("next")}
                            >
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
                                            strokeWidth="2"
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                        <path 
                                            d="M13 6.5L18.5 12L13 17.5" 
                                            stroke="#7287fd" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pagination

import Pagination from "@renderer/components/pagination"

export interface RoadProps  {
    name: string
    locations: string
    created_at: string
}

export interface TableProps {
    roads: RoadProps[]
    total: number
    inOnePage: number
    offset: number
    setOffset: React.Dispatch<React.SetStateAction<number>>
}

const RoadsTable: React.FC<TableProps> = (props: TableProps) => {
    return (
        <>
            <div className="max-w-[1000px] flex justify-center items-center min-h-screen mx-auto">
                <div className="w-full">
                    <div className="border-[1px] border-primary-color border-solid text-text-color">
                        <div className="flex w-full pb-1 pt-2 bg-foreground-color pt-[($half-spacing-unit] pl-0 pr-[*] pb-[1.5)]">
                            <div className="uppercase flex-[1_1_20%] text-center">#</div>
                            <div className="uppercase flex-[1_1_20%] text-center">Name</div>
                            <div className="uppercase flex-[1_1_20%] text-center">Locations</div>
                            <div className="uppercase flex-[1_1_20%] text-center">Created At</div>
                        </div>
                        <div className="table-content">
                            {props.roads.map((road, index) => (
                                <div key={index + 1} className="flex w-full py-2 pt-[($half-spacing-unit] pl-0 pr-[*] pb-[1.5)]">
                                    <div className="flex-[1_1_20%] text-center">{index + 1}</div>
                                    <div className="flex-[1_1_20%] text-center">{road.name}</div>
                                    <div className="flex-[1_1_20%] text-center">{road.locations}</div>
                                    <div className="flex-[1_1_20%] text-center">{road.created_at}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="justify-center items-center" >
                        <Pagination total={props.total} inOnePage={props.inOnePage} offset={props.offset} setOffset={props.setOffset}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadsTable

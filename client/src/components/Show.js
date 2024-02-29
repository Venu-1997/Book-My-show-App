/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Show = () => {
    const [showDetail, setShowDetail] = useState({});
    const {showId} = useParams();

    const getShowDetail = async () => {
        const res = await fetch(`http://localhost:5050/api/show/${showId}`);
        const detail = await res.json();
        setShowDetail(detail);
        
    }
    useEffect(() => {
        getShowDetail();
    },[]);

    return (
        <div className='flex flex-col'>
            {
                showDetail?.seats?.map( (seatCategory) => (
                    <>
                        <div className="text-regular text-slate-500 mt-4 mb-2 ">{seatCategory.category}-Rs:{seatCategory.price}</div>
                        <div className="flex flex-col gap-2">
                            {
                                seatCategory.arrangement?.map( (row) => (
                                    <div className="flex gap-2 ">
                                    <button className='bg-transparent border-slate-400 text-slate-500 py-2 px-4'>A</button>
                                    {
                                        row.map((col) => (
                                            <button className={`${col.status !== "BOOKED" ? "text-slate-500 hover:bg-blue-500 hover:text-white bg-transparent" : "text-white bg-slate-400"} border border-slate-400 bg-slate-500  py-2 px-4`}>{col.seatNumber}</button>
                                        ))
                                    }
                                    
                            </div>
                                ))
                            }
                            
                        </div>
                    </>
                ))
            }
            
        </div>
    )
}

export default Show;

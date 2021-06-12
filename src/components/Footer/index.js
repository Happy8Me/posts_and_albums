import { useState, useEffect, useRef } from "react";
import { LoadMoreBtn } from './LoadMoreBtn';
import { Pagination } from './Pagination';
import { getMoreItems } from "../../api";

export const Footer = ({
        limit = 6, 
        currentNumOfItems, 
        setCurrentNumOfItems, 
        order, 
        data, 
        setItems,
        total,
        page,
        setPage
    }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentNum, setCurrentNum] = useState(currentNumOfItems);
    const url = location.pathname;
    const initialRender = useRef(true);

    useEffect(() => {

        if(initialRender.current) {
            initialRender.current = false
        } else {
            getMoreItems(url, currentNum, Number(currentNum) + Number(limit), order = "acs").then(
                items => setItems([...data, ...items.data])              
            )

            setCurrentNumOfItems(currentNum)
            setTimeout(()=>{setIsLoading(false)}, 1000)
            // setIsLoading(false)
        }

    }, [currentNum])

    return (
         <div className="uk-margin uk-container">
        <Pagination 
            total={total}
            limit={limit}
            page={page}
            setPage={setPage}
        />
        <LoadMoreBtn
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            limit={limit}
            currentNum={currentNum}
            setCurrentNum={setCurrentNum}
        />
    </div>   
    )
}
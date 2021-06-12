const fetcher = async (pathname, options = {}) => {
    if(!process.env.REACT_APP_API_URL) {
        console.log("environment variable is missing")
    }

    try { 
        const resp = await fetch(`${process.env.REACT_APP_API_URL}${pathname}`, {  
            method: 'GET',
            headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
            ...options 
        })
   
        const meta = {};

        const total = resp.headers.get("X-Total-Count") 

        const links = resp.headers.get('Link')

        // console.log(links)

        // if(total) {
        //     meta.total = total;
        // }

        if(links) {
            meta.links = links
        }

        const data = await resp.json();

        return {
            data,
            meta
        }

    } catch(error) {
        throw error
    };
};

export default fetcher; 

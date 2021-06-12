import fetcher from "../utils/fetcher"

const sortPosts = async (limit , order = 'asc') => {
    //   console.log("sortPosts")
    return await fetcher(`/posts?_limit=${limit}&_sort=id&_order=${order}`)
}

const serchPosts = async (limit , page = '1', order = 'asc', title = '') => {
    //   console.log("serchPosts")
    return await fetcher(`/posts?_limit=${limit}&_page=${page}&_sort=id&_order=${order}&title_like=${title}`)
}
 
const getPostDetails = async (id) => {
    // console.log("getPostDetails")
    return await fetcher(`/posts?id=${id}`)
}

const getPostComments = async (id) => {
    // console.log("getPostComments")
    return await fetcher(`/comments?postId=${id}`)
}

const getAlbums = async (limit) => {
    // console.log("getAlbums")
    return await fetcher(`/albums?_limit=${limit}`)
}

const getMoreItems = async (url, start, end, order) => {
    // console.log("getMoreItems")
    return await fetcher(`${url}?_start=${start}&_end=${end}&_sort=id&_order=${order}`)
}

const getAllItems = async (url) => {
    return await fetcher(`${url}`)
}

export {
    getAlbums,
    sortPosts,
    serchPosts,
    getPostDetails,
    getPostComments,
    getMoreItems,
    getAllItems
}
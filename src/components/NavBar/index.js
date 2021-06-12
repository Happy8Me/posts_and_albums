import { OrderPosts } from './OrderPosts';
import { PostsLimit } from './PostsLimit';
import { Search } from './Search';
import { ToggleView } from './ToggleView';

export const NavBar = ( {
    setSortOrder, 
    setlimitPosts, 
    setIsSearching, 
    isSearching, 
    setSearchQuery,
    viewGrid,
    setViewGrid,
    viewList,
    setViewList
} ) => {
    return ( 
        <> 
            <Search 
                setIsSearching={setIsSearching}
                isSearching={isSearching}
                setSearchQuery={setSearchQuery}
            />
            <OrderPosts setSortOrder={setSortOrder}/>
            <PostsLimit setlimitPosts={setlimitPosts}/>

            <ToggleView 
                viewGrid={viewGrid}
                setViewGrid={setViewGrid}
                viewList={viewList}
                setViewList={setViewList}
            />
        </>
    )
};
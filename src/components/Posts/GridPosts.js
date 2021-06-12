import { useFavItems } from '../../FavItemsContext';
import { GridPostsItem } from './GridPostsItem';

export const GridPosts = ( {posts} ) => {
    const { favPosts } = useFavItems();
    const colors = posts.map(post => favPosts.some(el => (el.id == post.id)));

    return (
        <>
            {posts.map((post, index) => {
                return <GridPostsItem 
                    isColor={colors[index]}
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body} 
                />
                })
            }
        </>   
    )  
}
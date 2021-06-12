import { useFavItems } from '../../FavItemsContext';
import { ListPostsItem } from "./ListPostsItem";

export const ListPosts = ( {posts} ) => {
    const { favPosts } = useFavItems();
    const colors = posts.map(post => favPosts.some(el => (el.id == post.id)));

    return (
        <>
            {posts.map((post, index) => {
                return <ListPostsItem 
                    isColor={colors[index]}
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            })}
        </>
    )
}
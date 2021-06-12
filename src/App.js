import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HeaderApp } from "./components/HeaderApp";
import  PostsPage  from "./conteiners/PostsPage";
import  AlbumsPage  from "./conteiners/AlbumsPage";
import { PostDetailsPage } from "./conteiners/PostDetailsPage";
import { FavItemsProvider } from "./FavItemsContext";

export default function App() {

  return (
    <main className="uk-main">
      <FavItemsProvider>
        <BrowserRouter>
          <HeaderApp/>
          <Switch>
            <Route exact path="/posts" component={PostsPage}/>
            <Route path="/albums" component={AlbumsPage}/>
            <Route path='/posts/:id' component={PostDetailsPage}/>
            <Redirect to="/posts" />
          </Switch>
        </BrowserRouter>
      </FavItemsProvider>
    </main>
  );
}

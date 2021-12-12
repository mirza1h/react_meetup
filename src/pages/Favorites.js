import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content = {};

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yet. Add some!</p>
  } else {
    content = <MeetupList data={favoritesCtx.favorites}>
    </MeetupList>;
  }

  return (
    <section>
      <h1>My favorites</h1>
      <div>
        {content}
      </div>
    </section>
  );
}

export default FavoritesPage;

import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import AddNewMeetupPage from './pages/AddNewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
          <Route path='/new-meetup'>
            <AddNewMeetupPage />
          </Route>
        </Switch>
      </Layout >
    </div>
  );
}

export default App;

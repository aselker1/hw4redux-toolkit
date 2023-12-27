import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Posts,PostsDetailes } from './Component';
function App() {
 return (
    <Router>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:id" component={PostsDetailes} />
      </Switch>
    </Router>
 );
}

export default App;


// import React from 'react';
// import { Posts } from './Component';

// const App = () => {
//   return (
//     <div>
//       <Posts/>
//       <hr />
//     </div>
//   );
// }

// export default App;

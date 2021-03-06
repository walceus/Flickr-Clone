import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
          </Route>
          {/* <Route path="/wine">
            <WineModal />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Switch>
//           <Route exact path="/">
//             <HomePage location={location} />
//           </Route>
//           <Route path="/locations">
//             <Locations location={location} />
//           </Route>
//           <Route path="/profile">
//             <ProfilePage />
//           </Route>
//         </Switch>
//       )}
//     </>
//   );
// }

export default App;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";



// let wineDiv;

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  // const wines = useSelector((state) => state.wines);
  const sessionUser = useSelector((state) => state.session.user);
  const [hideList, setHideList] = useState(false);
  const wines = useSelector((state) => state.wines);
  const currentWine = wines.find((wine) => wine.id === wineId);
  const addWine = (wineId) => {
    dispatch(postWine(wineId));
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="userAuth">
        <LoginFormModal />
        <SignupFormModal />
        <button
          className="user"
          onClick={() =>
            dispatch(
              sessionActions.login({
                credential: "Demo-lition",
                password: "password",
              })
            )
          }
        >
          Demo User
        </button>
      </div>
    );
  }
  // let wineDiv = document.querySelector(".wines-list");
  function wineList(e) {
    if (wines.length) {
      setHideList(true);
      return;
    }
    e.target.nextElementSibling.style.display = "block";
  }


  useEffect(() => {}, [hideList]);
  return (
    <nav>
      <div>
        <NavLink id="home" exact to="/">
          UnWine
        </NavLink>
      </div>
      <div>
        {isLoaded && sessionLinks}
        <div className="search">
          <button
            type="search"
            placeholder="Find some Wine"
            id="searchBar"
            onFocus={wineList}
          />

          <div className="wineModalDiv">
            {wines.map(({ name, image, id }) => {
                return (
                  <WineModal key={id} name={name} image={image} wineId={id} />
                );
            })}
          </div>
       </div>
      </div>
    </nav>
  );
}
document.addEventListener("mousedown", (event) => {
  // if (
  //   wineDiv.lastChild.contains(event.target) ||
  //   wineDiv.firstChild.contains(event.target)
  // ) {
  //   wineDiv.lastChild.style.display = "block";
  // } else {
    let wineList = document.querySelector(".wines-list");
    wineList && (wineList.style.display = "none");
  // }
});
export default Navigation;

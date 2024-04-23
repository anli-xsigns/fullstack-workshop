import { graphql, useLazyLoadQuery } from "react-relay";
import { CartMenu } from "../cart/cart-menu";
import { UserMenu } from "../user/user-menu";
import { headerBarQuery } from "./__generated__/headerBarQuery.graphql";

import "./header-bar.css";
import { Link } from "react-router-dom";

interface HeaderBarProps {
  big?: boolean;
}

export default function HeaderBar(props: HeaderBarProps) {
  return (
    <div className={"eshop-header " + (props.big ? "home" : "")}>
      <div className="eshop-header-hero">
        {props.big ? (
          <img role="presentation" src="/images/header-home.webp" />
        ) : (
          <img role="presentation" src="/images/header.webp" />
        )}
      </div>
      <div className="eshop-header-container">
        <nav className="eshop-header-navbar">
          <Link className="logo logo-header" to="/">
            <img
              alt="Northern Mountains"
              src="/images/logo-header.svg"
              className="logo logo-header"
            />
          </Link>
          <UserMenu />
          <CartMenu />
        </nav>
      </div>
    </div>
  );
}

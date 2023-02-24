import React from "react";
import { Link } from "react-router-dom";
import restaurantfood from "../assets/restaurantfood.jpg";

const Main = () => {
    return (
        <div className="main">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>

                <Link to="/reservations">
                    <button id="button" to="/reservations">
                        Reserve a Table
                    </button>
                </Link>
            </div>

            <div>
                <img src={restaurantfood} alt="restaurant food" />
            </div>
        </div>
    );
}

export default Main;

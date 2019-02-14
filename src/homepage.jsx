import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
        <div className="">
            <div className="">
                <ul>
                    <li>
                        <h2>
                            <Link to="/Picture" className="link-page">
                                Figure
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <Link to="/reg" className="link-page">
                                Registration
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <Link to="/season" className="link-page">
                                Season
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <Link to="/videolist" className="link-page">
                                video
                            </Link>
                        </h2>
                    </li>
                </ul>
            </div>
        </div>
         );
  }
}
export default Homepage;

import React from "react";
import Menu from "./Menu";

const Base = ({
                  title = "My Title",
                  description = "My description",
                  className = "bg-dark text-white p-4",
                  children
              }) => (
    <div>
        <Menu />
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-5 py-3">
            <div className="container-fluid bg-success text-white text-center py-3">
                <h4>If you got any questions, feel free to reach out!</h4>
                <a href="mailto:archive.tushar@gmail.com"><button className="btn btn-warning btn-lg" >Contact Us</button></a>
            </div>
            <div className="container">
        <span className="text-muted">
          The Ultimate <span className="text-white">T-Shirts</span> Store
        </span>
            </div>
        </footer>
    </div>
);

export default Base;

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="src/components/Header/Header.js">
            PS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                {" "}
                <a class="nav-link" id="about" href="#header">
                  Sobre Mim{" "}
                </a>{" "}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects" id="projetos">
                  {" "}
                  Projetos{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer" id="contato">
                  {" "}
                  Contato{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

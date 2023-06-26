import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand name" href="#">Favy.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex searchitem">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <i className="fa fa-search"></i>
            </form>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button className="btn btn-dark">OUR CATEGORIES</button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <span className="text text-center">Finding Best Products Now<br />in Your Fingertips</span>
      </div>
      <div className="row mt-2 g-4">
        <div className="col-md-3">
          <div className="card p-1">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Mobile</span>
                <span>Phones</span>
              </div>
              <div>
                <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Head</span>
                <span>Phones</span>
              </div>
              <div>
                <img src="https://i.imgur.com/SHWASPG.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Smart</span>
                <span>Watches</span>
              </div>
              <div>
                <img src="https://i.imgur.com/Ya0OXCv.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Air</span>
                <span>Purifiers</span>
              </div>
              <div>
                <img src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2tr5">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Vacuum</span>
                <span>Cleaners</span>
              </div>
              <div>
                <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Washing</span>
                <span>Machines</span>
              </div>
              <div>
                <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Smart</span>
                <span>Televisions</span>
              </div>
              <div>
                <img src="https://i.imgur.com/Zq8VigZ.png" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                <span>Laptops</span>
              </div>
              <div>
                <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

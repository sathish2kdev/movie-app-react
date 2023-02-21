
import "../assets/css/Header.css"
const Header = () => {

    

    return (
      <>
        <div className="py-4 header-page">
          <div className="row py-1">
            <div className="col-lg-11 col-md-11 col-sm-12 mx-auto d-flex search-div">
              <div className="d-flex justify-content-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tag-Style bi bi-list-task tag-style"
                  width="45"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                  />
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                  <path
                    fillRule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                  />
                </svg>
                <p className="app-title">Copy Flex</p>
                <a href="/">Home</a>
                <a href="/">Movies</a>
                <a href="/">Shows</a>
                <a href="/">Anime</a>
              </div>
              <div className="d-flex space-search">
                <input
                  className="form-control search-icon"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="serch-icon-style bi bi-search"
                  width="33"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <a href="/Login" className="Login-action-url">Login</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;
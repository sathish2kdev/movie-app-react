// const MainPage
import React, { lazy, Suspense } from "react";
import "../assets/css/DashBoard.css"



// import Header from "../containers/Header";
// import Carosalpage from "./Carsoalpage";
// import CardContent from "./CardContent";

const HeaderLazy = lazy(() => import("../containers/Header"));
const CarosalpageLazy = lazy(() => import("./Carsoalpage"));
const CardContentLazy = lazy(() => import('./CardContent'));

const DashBoardPage = () => {
    return (
      <>
        <div className="container-fluid main-page px-0">
          <div className="row">
            <Suspense fallback={<div> Please Wait... </div>}>
            <div className="col-lg-12">
              <div className="dashboard-continer sticky col-lg-12">
                <HeaderLazy />
              </div>
              <div className="body-page">
                <CarosalpageLazy />
                <CardContentLazy />
              </div>
            </div>
            </Suspense>
            {/* <div className="col-lg-12">
              <div className="dashboard-continer sticky col-lg-12">
                <Header />
              </div>
              <div className="body-page">
                <Carosalpage />
                <CardContent />
              </div>
            </div> */}
            
          </div>
        </div>
      </>
    );
}

export default DashBoardPage;
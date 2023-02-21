import { Route, Routes } from "react-router-dom";
import Create from "../components/CRUD/Create";
import DashBoardPage from "../components/DashBoardPage";
import Login from "../components/Login";
import SingleContentViewPage from "../components/SingleContentViewPage";
import ViewCardContainer from "../components/ViewCardContainer";

const RouterComponent = () => {
    return (
        <>
        <Routes>
            {/* <Route path="/" element = {<DashBoardPage />}></Route> */}
            {/* <Route path="/" element={<Create />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/"  element={<DashBoardPage />} />
            <Route path="/viewContent/:category" element={<ViewCardContainer />} />
            <Route path="/SingleContentViewPage/:name" element={<SingleContentViewPage />} />
        </Routes>
        </>
    )
}

export default RouterComponent;
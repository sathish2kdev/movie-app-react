import { useNavigate, useParams } from "react-router-dom";
import Header from "../containers/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../assets/css/ViewCardContainer.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorybasedData } from "../redux/action";

const ViewCardContainer  = () => {
    const {category} = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const selector = useSelector((store) => store.categoryContent.data);

      useEffect(() => {
        dispatch(getAllCategorybasedData(category));
      },[]);

    const SetContentDataFunction  = () => {
        return (
          <>
            <div className="view-card-container row">
              <div className="col-lg-12 my-3 mx-5">
                <div className="my-4">
                  <p className="view-content-header mx-0">{category}</p>
                </div>
                <div className="d-flex flex-row">
                  <div className="view-card-body">
                    {selector != null &&
                      selector.length > 0 &&
                      selector[0].contentData != null &&
                      selector[0].contentData.length > 0 &&
                      selector[0].contentData.map((data, index) => (
                        <div className="view-card-data" key={index}>
                          <LazyLoadImage className="load-img" 
                            src={require(`../assets${data.path}.jpg`)}
                            alt={`${data.name}`}
                            onClick={() => {navigate(`/SingleContentViewPage/${data.name}`);window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }


    return (
        <>
        <div className="container-fluid main-page px-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-continer sticky col-lg-12">
                <Header />
              </div>
              <div className="body-page">
                <SetContentDataFunction />
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default ViewCardContainer;
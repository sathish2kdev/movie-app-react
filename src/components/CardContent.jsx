import { createSearchParams, useNavigate } from "react-router-dom";
import "../assets/css/CardContent.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopicBasedContent } from "../redux/action";

const CardContent = () => {
    const navigate = useNavigate();

    const select = useSelector((store) => store.topicContent.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopicBasedContent());
    },[]);

    
    const useNavigateSearch = () => {
      const navigate = useNavigate();
      return (pathname, params) =>
        // navigate(`${pathname},search:?${createSearchParams(params)}`);
        navigate({ pathname, search: `?${createSearchParams(params)}` });
    };
    
    const navigateSearch = useNavigateSearch();
    const goToPosts = (category,name) =>
    navigateSearch('/SingleContentViewPage', { category: category, name: name });

    // const goToPosts = () =>
    // navigate({
    //   pathname: '/SingleContentViewPage',
    //   search: '?name=date&order=newest',
    // });

    return (
      <>
        <div className="card-container my-2">
          <div className="row">
            {select != null &&
              select.responseData != null &&
              select.responseData.length > 0 &&
              select.responseData.map((data, index) => (
                <div
                  className="col-lg-12 mt-3 mb-5 card-data-category"
                  key={index}
                >
                  <div
                    className="my-4"
                    onClick={() => navigate(`/viewContent/${data.category}`)}
                  >
                    <p className="content-header mx-0">
                      {data.category}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="30"
                          fill="currentColor"
                          className="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="card-body">
                      {data.information.length > 0 &&
                        data.information.map((imgId, imgIndex) => (
                          <div className="card-data" key={imgIndex}>
                            <LazyLoadImage
                              className="card-img"
                              src={require(`../assets${imgId.imgPath}.jpg`)}
                              alt={`${imgId.applicationName}`}
                              onClick={() =>goToPosts(data.category,imgId.applicationName)}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };
  
  export default CardContent;
  
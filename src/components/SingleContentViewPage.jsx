import { useParams } from "react-router-dom";
import Header from "../containers/Header";
import "../assets/css/SingleContentViewPage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ViewCardContainer from "./ViewCardContainer";
import CardContent from "./CardContent";
import { useEffect, useState } from "react";

const SingleContentViewPage = () => {
 
    const {name} = useParams();

    const [state,setState] = useState(name);
    // setState((preValue) => {
    //     return {
    //         ...preValue,
    //         name
    //     }
    // })
    console.log(state);

    // useEffect(() => {
    //     console.log("HHHH");
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // },[state])

    if(state){
        console.log("SSSS");
        window.scrollTo({top: 111, left: 0, behavior: 'smooth'});
    }

    return(
        <>
        <div className="container-fluid main-page px-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-continer sticky col-lg-12">
                <Header />
              </div>
              <div className="body-page">
              <div className="col-lg-11 col-md-11 col-11 mx-auto my-5 px-5">
                <div className="view-card-conatiner">
                    <div className="seperation-information mx-5 mt-2">
                    <LazyLoadImage className="single-load-img " 
                            src={require(`../assets/images/Movie/ActionMovies/Mission Impossible Fallout.jpg`)}
                            alt={`data`}
                          />  
                    <div>
                        <h1>{name}</h1>
                    </div>
                    </div>
               
                </div>
              
            </div>
            <CardContent />
              </div>
            </div>
          </div>
        </div>
            
        </>
    )
}

export default SingleContentViewPage;
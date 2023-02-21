import "../assets/css/Carosalpage.css"
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headerConentCarasoel } from "../redux/action";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Carosalpage = () => {


    const dsipatch = useDispatch();
    

    const selector = useSelector((store) => store.headerMovieDisplay.data);
    useEffect(() =>  {
        dsipatch(headerConentCarasoel());
    },[])

    console.log(selector);
    const ContenteDetails = ({data}) => {
      console.log(data);
        return (
          <>
            {data.language ? (
              data.genre ? (
                data.year ? (
                  <p className="detials">
                    {data.language ? <span>{data.language}</span> : null}
                    {data.genre ? (
                      <span>
                        <span>.</span>
                        {data.genre}
                      </span>
                    ) : null}
                    {data.year ? (
                      <span>
                        <span>.</span>
                        {data.year}
                      </span>
                    ) : null}
                  </p>
                ) : null
              ) : null
            ) : null}
          </>
        );
    }

 function CarasoelDisplay(){

        return (
          <>
            <Carousel>
              {selector != null &&
                selector.responseData != null &&
                selector.responseData.length > 0 &&
                selector.responseData.map((data, index) => (
                  <Carousel.Item key={index}>
                    <div className="row">
                      <div className="py-5 my-4 px-5 col-lg-4">
                        <div className="content">
                          <h1>Hi</h1>
                          <p className="name">{data.contentName}</p>
                          {/* <p className="name">{data.programName}</p> */}
                          <ContenteDetails data={data} />
                          <p className="description">{data.description}</p>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <LazyLoadImage
                          className="carasol-img-scroll"
                          // src={require(`../assets${data.path}.jpg`)}
                          src={require(`../assets${data.contentpath}.jpg`)}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
            </Carousel>
          </>
        );
    }


    return (
        <>
                <div className="carsoal-coniner-set">
                        <CarasoelDisplay />
                </div>
     
        </>
    )
}

export default Carosalpage;

 // src={`${data.path}`}
                            //  src={require(`../assets/images/Movie/header/${data.path}.jpg`)}
                            // src={require(val)}
                            // src={`../assets/images/Movie/Action Movies/${data.path}.jpg`}
                            //  src={require(`../assets/images/Movie/Action Movies/${data.name}.jpg`)}
                            
                            //  src={require("../assets/images/Movie/header/Extraction.jpg")}
                            //   src={require("../assets/images/Movie/header/content-1.jpg")}
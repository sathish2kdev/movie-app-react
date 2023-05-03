import { useSearchParams } from "react-router-dom";
import Header from "../containers/Header";
import "../assets/css/SingleContentViewPage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ViewCardContainer from "./ViewCardContainer";
import CardContent from "./CardContent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from 'react-player/youtube'
import { findDOMNode } from "react-dom";
import { getContentDetailsData } from "../redux/action";
import "../assets/css/CardContent.css";
// import { toast } from 'react-toastify';

const SingleContentViewPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const contentDetial = useSelector((store) => store.contentdata);
  console.log(contentDetial);
  // const loopFunction = () => {
  //   let arrayData = selector.responseData;
  //   for (let a = 0; arrayData != null && a < arrayData.length; a++) {
  //     if (arrayData[a].category != null && arrayData[a].category === state) {
  //       console.log("hello");
  //       for (let x = 0; x < arrayData[a].information.length; x++) {
  //         if (arrayData[a].information[x].applicationName === name) {
  //           console.log(arrayData[a].information[x]);
  //           setContentData(arrayData[a].information[x]);
  //           break;
  //         }
  //       }
  //     }
  //   }
  // };

  const selector = useSelector((store) => store.topicContent.data);
  console.log(selector);
  useEffect(() => {
   
    if (searchParams.get("name") != null && searchParams.get("name") != "") {
      let name = searchParams.get("name");
      // setName(name);
      dispatch(getContentDetailsData(name))
    }
    
  }, []);


  const ContenteDetailsDisplay = ({data}) => {
    console.log(data);
      return (
        <>
          <div className="content-head">
            <div className="space-head">
              <p className="headdet">{data.categoryType}</p>
              <p className="headdet">{data.yearOfReleasing}</p>
              <p className="headdet">124 m</p>
            </div>
            <div>
              <div className="popularity">
                <p className="ratinghead">IMDB Rating</p>
                <p className="ratingvalue">
                  89{" "}
                  <img
                    width={30}
                    src={require("../assets/images/svg/star-icon.jpg")}
                    alt=""
                  />
                </p>
              </div>
              <div className="popularity">
                <p className="ratinghead">Your Rating </p>
                <p className="ratingvalue">89 </p>
              </div>
              <div className="popularity">
                <p className="ratinghead">Popularity </p>
                <p className="ratingvalue">8</p>
              </div>
            </div>
          </div>
        </>
      );
  }

  let player = null;
  const ref = (p) => {player = p;}
  const playVideo = () =>{
    findDOMNode(player).requestFullscreen().catch(
      (err) => 
      {
        alert("Could not activate full-screen mode :(")
      });
    }


  return (
    <>
      <div className="container-fluid main-page px-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="dashboard-continer sticky col-lg-12">
              <Header />
            </div>
            <div className="body-page px-2">
              {/* <div className="col-lg-11 col-md-11 col-11 mx-auto my-5 px-5"> */}
                 {contentDetial ? (
                   <div className="col-lg-11 col-md-11 col-11 mx-auto my-5 px-5">
                    <div className="view-card-conatiner">
                    <p className="text-app-name">
                      {contentDetial.applicationName}
                    </p>
                    <ContenteDetailsDisplay data={contentDetial} />
                    <div className="seperation-information mt-1">
                      {contentDetial.imgPath ?   <LazyLoadImage
                        className="single-load-img"
                        src={require(`../assets${contentDetial.imgPath}.jpg`)}
                        alt={`data`}
                      />  :""}
                    
                      <ReactPlayer
                      	ref={ref}
                        width="65%"
                        height="73%"
                        url={contentDetial.link}
                        // url="https://www.youtube.com/watch?v=gOW_azQbOjw"
                        playing
                        muted
                        config={{
                          file: {
                            attributes: {
                              autoPlay: true,
                            },
                          },
                        }}
                      />
                      <div className="rect">
                      <div className="rectangle-box">
                      <svg onClick={() =>playVideo} xmlns="http://www.w3.org/2000/svg" width="100" height="68" fill="currentColor" class="bi bi-caret-right-square-fill svg-video" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
</svg>
                  <h3>Play</h3>
                      </div>
                      <div className="rectangle-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="68" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
</svg>
<h3>Images</h3>
                      </div>
                      </div>
  
                      <div></div>
                    </div>
                    <p className="text-app-content px-2">Story Line<span>
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
                          <p className="storyline">{contentDetial.description}</p>
                          <p className="text-app-content pt-3 px-2">Genres <span className="types">{contentDetial.genreCategory}</span></p>
                  </div>
</div>
                  
                ) : (
                  ""
                )}
              {/* </div> */}
              <CardContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleContentViewPage;

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "../assets/css/Category.css";

const Categorypage = () => {
  const [imgSrc, setImgSrc] = useState(null);
  let [webCamStatus, setWebCamStatus] = useState(false);

  //IMAGE FORMAT
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
    // facingMode:  { exact: "environment" }
  };


  //CONVERT IMAGE TO BASE64 
  const covertImageTobase64 = async (event) => {
    let file = event.target.files[0];
    let base64File = await convertToBase64(file);
    setImgSrc(base64File);
  };
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  });

  const WebcamCapture = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // let file = convertToBase64(imageSrc);
        setImgSrc(imageSrc);
      }, [webcamRef]);

    return (
      <>
         {imgSrc === null ? (
        <>
          <Webcam className="camera"
            audio={false}
            mirrored={true}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={imgSrc} alt="screenshot" />
          <button onClick={() => setImgSrc(null)}>Retake</button>
        </>
      )}
      </>
    );
  };

  return (
    <>
      <div className="category">
        <WebcamCapture  />
        {/* <input
          type="file"
          capture="Camera"
          accept="image/*"
          onChange={(e) => covertImageTobase64(e)}
        />
        <img src={imgSrc} alt="" /> */}
      </div>
    </>
  );
};

export default Categorypage;

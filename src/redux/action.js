import axios from "axios"
import { baseUrl, baseUrl1, carasouelApi, ContentBasedOnCategory, getCategorywithContent, getContentDetailsdata, headerContent, loginURl, saveFormUrl, TopicBasedContent } from "../urlConstant"
import { CATEGORY_BASED_CONTNENT, CONTENT_DETIALS, GET_USER_FORM_RESPONSE, HEADER_CONTENT_ACTION, LOGIN_ACTION_SUBMIT, SAVE_USER_FORM_RESPONSE, TOPIC_CONTENT_ACTION } from "./actionType"


export const isLoginValid = (data) => ({
    type:LOGIN_ACTION_SUBMIT,
    payload:data
})

export const headerContentAction = (data) => ({
    type:HEADER_CONTENT_ACTION,
    payload:data
})

export const TopicbasedContentAction = (data) => ({
    type:TOPIC_CONTENT_ACTION,
    payload:data
})

export const CategoryBasedDataAction = (data) => ({
    type:CATEGORY_BASED_CONTNENT,
    payload:data
})

export const ContentDetailsAction = (data) => ({
    type:CONTENT_DETIALS,
    payload:data
})

export const loginAction = (username,password) => {
    let link = baseUrl1+loginURl+username+"&password="+password;
    console.log(link);
    const headers = {
        "Content-Type": "text/json"
    };
    return function(dispatch){
        axios.post(link,{"headers":headers})
            .then((response) => {
                dispatch(isLoginValid(response))
            }).catch((err) => dispatch(isLoginValid(err)))
    }
}

export const headerConentCarasoel = () => {
    let link = baseUrl1+carasouelApi;
    return function(dispatch){
       const headers={
            "Authorization":`Bearer ${localStorage.getItem("AuthToken")}`,
            "content-type":"application/json"
       }
        axios.get(link,{"headers":headers})
                .then((data) => {
                    dispatch(headerContentAction(data))
                }).catch((errResp) => {
                    dispatch(headerContentAction(errResp))
                })
    }
}

export const getTopicBasedContent = (category) => {
    let link = baseUrl1+getCategorywithContent+category;
    return function(dispatch){
        const headers={
            "Authorization":`Bearer ${localStorage.getItem("AuthToken")}`,
            "content-type":"application/json"
       }
        axios.get(link,{"headers":headers})
                .then((data) => {
                    dispatch(TopicbasedContentAction(data))
                }).catch((errResp) => {
                    dispatch(TopicbasedContentAction(errResp))
                })
    }
}

// export const getTopicBasedContent = () => {
//     let link = baseUrl+TopicBasedContent;
//     return function(dispatch){
//         axios.get(link)
//                 .then((data) => {
//                     dispatch(TopicbasedContentAction(data))
//                 }).catch((errResp) => {
//                     dispatch(TopicbasedContentAction(errResp))
//                 })
//     }
// }


export const getAllCategorybasedData = (content) => {
    let link = baseUrl+ContentBasedOnCategory+content;
    return function(dispatch){
        axios.get(link).then((data) => {
            dispatch(CategoryBasedDataAction(data));
                }).catch((errResp) => {
                    dispatch(CategoryBasedDataAction(errResp));
                })
    }
}


export const getContentDetailsData = (applicationName) => {
  
    let link = baseUrl1+getContentDetailsdata+applicationName;
    return function(dispatch){
        const headers={
            "Authorization":`Bearer ${localStorage.getItem("AuthToken")}`,
            "content-type":"application/json"
       }
        axios.get(link,{"headers":headers}).then((response) => {
            console.log(response);
            dispatch(ContentDetailsAction(response.data.responseData));
        }).catch((errResp) => {
            console.log(errResp);
            dispatch(ContentDetailsAction(errResp));
        })
    }
}


////////
export const SaveUserFormReposne = (response) => ({
    type:SAVE_USER_FORM_RESPONSE,
    payload:response
})

export const getResponseValue = (response) => ({
    type:GET_USER_FORM_RESPONSE,
    payload:response
})


export const SaveUserForm = (data) => {
    return function(dispatch){
        console.log(data);
         axios.post(baseUrl,data)
                .then(response => dispatch(SaveUserFormReposne(response)))
                        .catch(err => dispatch(SaveUserFormReposne(err)));
    
    }
}




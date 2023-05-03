import { CATEGORY_BASED_CONTNENT, CONTENT_DETIALS, HEADER_CONTENT_ACTION, LOGIN_ACTION_SUBMIT, SAVE_USER_FORM_RESPONSE, TOPIC_CONTENT_ACTION } from "./actionType"

// const initialState= {
//     saveReponseDetail:null
// }

const initialState= {
    loginValidate:null,
    headerMovieDisplay:[],
    topicContent:[],
    categoryContent:[],
    contentdata:{}
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_ACTION_SUBMIT:
            return {
                ...state,
                loginValidate:action.payload
            }
            // return {
            //     ...state,
            //     saveReponseDetail:action.payload
            // }
            case HEADER_CONTENT_ACTION:
               return  {
                    ...state,
                    headerMovieDisplay:action.payload
                }
            case TOPIC_CONTENT_ACTION : 
                return {
                    ...state,
                    topicContent:action.payload
                }
            case CATEGORY_BASED_CONTNENT : 
                return {
                    ...state,
                    categoryContent:action.payload
                }
            case CONTENT_DETIALS : 
                return {
                    ...state,
                    contentdata:action.payload
                }
        default: 
        return state;
    }
}


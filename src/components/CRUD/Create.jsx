import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveUserForm } from "../../redux/action";

import "../CRUD/create.css"

const Create = () =>  {

    const [userForm,setUserForm] = useState({});

    const dispatch  = useDispatch();
    const selector = useSelector((state) => state.saveReponseDetail);

    const setFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserForm((preValue) => {
            return {
                ...preValue,
                [name]:value
            }
        })
    }


    const saveFormDetails = (e) => {
       e.preventDefault();
       console.log(userForm);
       dispatch(SaveUserForm(userForm));
       console.log(selector.statusText);
       return <p>{selector.statusText}</p>
    }

    return (
        <>
        <div className="container-fluid form-continer">
            <div className="row justify-content-center">
        <form>
                <div className="col-lg-10 col-md-10 py-5 px-2">
                    <h1>USER FORM</h1>
                <div className="row my-5">
                <div className="col-lg-4 fields">
                    <label>Customer Name </label>
            <input type="text" name="name" value={userForm.name || ''} onChange={setFormData} />
                    </div>
                    <div className="col-lg-4 fields">
                    <label>Customer Number </label>
            <input type="text" name="number" value={userForm.number || ''} onChange={setFormData} />
                        </div>
                        <div className="col-lg-4 fields">
                    <label>Address</label>
            <input type="text" name="address" value={userForm.address || ''} onChange={setFormData} />
                        </div>
                        <div className="col-lg-4 fields">
                    <label>Location</label>
            <input type="text" name="location" value={userForm.location || ''} onChange={setFormData} />
                        </div>
                        <div className="col-lg-4 fields">
                    <label>Mail Id</label>
            <input type="mail" name="mail" value={userForm.mail || ''} onChange={setFormData} />
                        </div>
                        <div className="col-lg-12 mx-0 my-5">
                            <button type="button" className="btn btn-primary submit" onClick={saveFormDetails}>Submit</button>
                        </div>
            <p>{selector.statusText}</p>
                        
                                      </div>
                    
                  
                </div>
           
        </form>
        </div>
        </div>
        
        </>
    )
}

export default Create;
import axios from "axios";
import { API_HOST_PREFIX, onGlobalSuccess, onGlobalError } from "./serviceHelpers";

const endpoint = `${API_HOST_PREFIX}/api`

let getForums = () => {

  const config = {
    method: "GET",
    url:`${endpoint}/forums`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
};
let getForumsId = (id) => {

  const config = {
    method: "GET",
    url:`${endpoint}/forums/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
};


  let deleteForums = (id) => {
    const config = {
    method: "DELETE",
    url: `${endpoint}/forums/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
};


let addForums = (payload) => {

  const config = {
    method: "POST",
    url: `${endpoint}/forums`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
}

let editForums = (id,payload) => {

  const config = {
    method: "PUT",
    url: `${endpoint}/forums/edit/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
}

const getAllForumCategories = ()=>{
  const config = {
      method: "GET",
      url: `${endpoint}/forumscategories`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
}

const getAllForums = (pageIndex, pageSize)=>{
  const config = {
      method: "GET",
      url: `${endpoint}/forums/allpaginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
}

const searchAllForumsByQuery = (pageIndex, pageSize, query)=>{
  const config = {
      method: "GET",
      url: `${endpoint}/forums/search/?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    return axios(config).catch(onGlobalSuccess).catch(onGlobalError);
}

  const forumsService = { searchAllForumsByQuery, getAllForums, getForums,getAllForumCategories,deleteForums,addForums,editForums,getForumsId}

  export default forumsService;

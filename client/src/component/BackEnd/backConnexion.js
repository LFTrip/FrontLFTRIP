import  * as conf from '../../const/params';
import axios from "axios";
const config = {
    url : "http://localhost:8081/api/v1/",
    uri : {
        "login" : 'login',
        "logout" : "logout",
        "users" : "users"
    }
}
export default class BackConnexion{
    constructor(){
        this.authListener = {}
    }

    dosignWithEmailAndPassword = (data) =>{
        return new Promise((resolve, reject) => { resolve(axios.post(
            config.url+config.uri.login,
            {
                "email": data.email,
                "password" : data.password
            }).then(response=> {

                if(response.status === 200){
                    console.log(response.data)
                    data = {
                        token : response.data
                    }
                     localStorage.setItem('authUser',  JSON.stringify(data)  )
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( console.log(error));
            })) });
    }

    doCreateUserWithEmailAndPassword = (data) =>{
        return new Promise((resolve, reject) => { resolve(axios.post(
            config.url+config.uri.users,
            {
                "firstname": data.firstname,
                "lastname" : data.lastname,
                "email": data.email,
                "password" : data.password,
            }).then(response=> {

            if(response.status === 200){
                console.log(response.data)
            }else{
                ///reject( console.log(response.data));
            }
        }).catch(error =>{
            reject( console.log(error));
        })) });
    }

    onlogOut = data =>{
        axios.post(
            conf["url"]+conf["uri"]['logout'],
            {
                data : data
            }.then(response=> {
                if(response.status === 200){
                    localStorage.setItem('authUser', null)
                }else{
                    return null;
                }
            }).catch(error =>{
                console.log(error);
            })
        )
    }

    callPost = (data, uri) =>{
        axios.post(
            conf["url"]+conf["path"][uri],
            {
                Data : data
            }.then(response=> {
                if(response.status === 200){
                    return data;
                }else{
                    return null;
                }
            }).catch(error =>{
                console.log(error);
                return error;
            })
        )
    }


    

    postDate= (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(
            axios.post(
           "http://localhost:8081/"+uri,
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( error);
            }))});
    }

    getDateWitId = (id, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.get(
           "http://localhost:8081/"+uri,
            {
                id : id
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }

    getData = ( uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.get(
           "http://localhost:8081/"+uri).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }

    updateDate = (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.put(
           "http://localhost:8081/"+uri,
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }

    deleteDate= (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.delete(
           "http://localhost:8081/"+uri,
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }
}
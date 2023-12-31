const btnGetData = document.getElementById('btn-get-data');
const btnPostData = document.getElementById('btn-post-data');

const requestHandle = (method, url, data = null) =>{
    const xhr = new XMLHttpRequest();

    xhr.open(method,url,true);

    xhr.responseType = 'json';
   
   xhr.onload = function(){
    if(xhr.status < 400){
        console.log(xhr.response);
    }else{
        console.log(xhr.response);
    }
   }

   xhr.send(data);
}


btnGetData.addEventListener('click',()=>{
    
    requestHandle('GET','https://jsonplaceholder.typicode.com/posts');
})

btnPostData.addEventListener('click', ()=>{
    requestHandle('POST', 'https://jsonplaceholder.typicode.com/posts',JSON.stringify({
        title: 'Moudud',
        body: 'Ahammed',
        userId: 1,  
    }))
})
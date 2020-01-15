function fetchData(){
    
    fetch("https://reqres.in/api/users").then(response => {
    //const data=response.json();    
    //console.log(data);
    console.log(response);
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();
}).then(data =>{
    console.log(data.data);
    const html =data.data.map(user =>{
        return `
        <div id="user" class="uk-card uk-card-hover uk-card-body" style="width:400px;margin-left:auto;margin-right:auto;">
        <p 
        style="display: block;margin-left: auto;margin-right: auto;
        width:35%;border-radius:20px;"><img src="${user.avatar}" class="uk-border-circle abc"  alt="${user.first_name}/>"</p>
        <p style="text-align:center;color:white;font-size:22px;margin-bottom:0px;">${user.first_name}</p>
      <p style="text-align:center;color:white;font-size:15px;margin-top:0px;">${user.email}</p>
        </div>
        `;
        //<div class="user">return 'Name : '+ user.first_name + '<br></br>'</div>
    
    }).join('');
    //console.log(html);
    document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
}).catch(error =>{
    console.log(error);
});
}

fetchData();
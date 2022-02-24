

  function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  function loadUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>displayUsers(data))
  }
  function displayUsers(data) {
    //  console.log(data); 
const ul=document.getElementById('users');
    for(const user of data){
        console.log(user.address);
        const li=document.createElement('li');
        li.textContent=`Name :${user.name} \n email:${user.email}`;
        ul.appendChild(li);
    }
  }
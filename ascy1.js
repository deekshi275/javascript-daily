let cards=document.getElementsByClassName("cards")[0]


let task= async()=>{
    let url="https://dummyjson.com/todos"
    let data=  await fetch(url)
    let d= await data.json()
    let fd= d.todos
    console.log(fd)

    fd.map((ele)=>{
        let {id,todo,completed,userId}= ele
        if (completed){
            cards.innerHTML+=`<div style="background-color: lightblue" class="card">
                <h3>id: ${id} </h3>
                <h3>todo: ${todo}</h3>
                <h3 >userid :${userId}</h3>
                <h3>completed :${completed}</h3>
            </div>`

        }
        else{
            cards.innerHTML+=`
            <div style="background-color: lightgray;" class="card">
                <h3>id: ${id} </h3>
                <h3>todo: ${todo}</h3>
                <h3 >userid: ${userId}</h3>
                <h3>completed: ${completed}</h3>
                
            </div>
        `
        }
    })

}
task()




// completed ? "true": "false" 0
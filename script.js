function addtodo(){
    const input=document.getElementById("todo-input");
    const task=input.value.trim();  //value is not inbuilt func,it's a default name 
    if(task==""){
        alert("Please enter the task")
        return;
    }

    const li=document.createElement("li");
    li.innerHTML=`
    <span onclick="completetodo(this)">
    ${task}
    </span>
    <button onclick="deletetodo(this)">delete</button>`;
    document.getElementById("todolist").appendChild(li);
    input.value="";

    
}
function deletetodo(button){
        button.parentElement.remove();
    }

 function completetodo(element){
        element.parentElement.classList.toggle("completed");
    }
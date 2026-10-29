let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let message = document.getElementById("message");
let count = 0;



addBtn.addEventListener("click", function(){
    

    if(input.value.trim() !== ''){
        let newLi = document.createElement('li');
        newLi.textContent = input.value;
        taskList.append(newLi);
        newLi.classList.add("hero__list-item");

        count += 1;

        
        message.textContent = "";
        
        

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        newLi.append(removeBtn);
        removeBtn.classList.add("hero__delete-btn");

        removeBtn.addEventListener("click", function(event){
            event.stopPropagation();
            newLi.remove();
            count -= 1;

            if(count === 0){
                message.textContent = "There are no tasks yet!";
            };
        });

    
        newLi.addEventListener("click", function(){
            newLi.classList.toggle("hero__list-togle");
            
        });

    }

    

    input.value = '';
});


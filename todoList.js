document.addEventListener("DOMContentLoaded", function() {
  var taskInput = document.getElementById("taskInput");
  var addTaskBtn = document.getElementById("addTaskBtn");
  var todoList = document.getElementById("todoList");
  var inProgressList = document.getElementById("inProgressList");
  var doneList = document.getElementById("doneList");

  function createTask(taskText, targetList) {
    var taskItem = document.createElement("li");
    taskItem.innerHTML = taskText;
    targetList.appendChild(taskItem);
  }


  
  addTaskBtn.addEventListener("click", function() {
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskItem = document.createElement("li");
     
      createTask( taskItem.innerHTML = taskText + '<button class="Btn start">start</button><button class="Btn delete">Delete</button>', todoList);
      taskInput.value = "";
      addDeleteEventListeners();
      addStartEventListeners()
      addDoneEventListeners()
    }
  });

  function addDeleteEventListeners() {
    var deleteButtons = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function() {
        this.parentNode.remove();
      });
    }
    
  }

  function addStartEventListeners() {
    var startButton = document.getElementsByClassName("start");
   
    for (var i = 0; i < startButton.length; i++) {
      startButton[i].addEventListener("click", function() {
        parenElement = this.parentNode
        var oldButtons = this.parentNode.querySelectorAll(".Btn")
        
        for (var i = 0; i < oldButtons.length; i++) {
          var button = oldButtons[i]; 
          button.parentNode.removeChild(button);
        }
        createTask( parenElement.innerText + '<button class="Btn done">Done</button><button class="Btn delete">Delete</button>', inProgressList);
        parenElement.remove()
        addDeleteEventListeners();
      addStartEventListeners()
      addDoneEventListeners()
      });
      
    }
  }

  function addDoneEventListeners() {
    var doneButton = document.getElementsByClassName("done");
   
    for (var i = 0; i < doneButton.length; i++) {
      doneButton[i].addEventListener("click", function() {
        parenElement = this.parentNode
        var oldButtons = this.parentNode.querySelectorAll(".Btn")
        
        for (var i = 0; i < oldButtons.length; i++) {
          var button = oldButtons[i]; 
          button.parentNode.removeChild(button);
        }
        createTask( parenElement.innerText + '<button class="Btn delete">Delete</button>', doneList);
        parenElement.remove()
        addDeleteEventListeners();
      addStartEventListeners()
      addDoneEventListeners()
      });
      
    }
  }
});


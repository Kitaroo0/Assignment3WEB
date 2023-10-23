const limit = 10;
var count = 0;

// Here we add a new task
function addTask() {
    const newTaskText = document.getElementById("newTask").value;
    if(newTaskText){
        // Limit checker
        if (count >= limit) {
            alert("You have reached the limit");
        }
        else{
            const taskList = document.getElementById("task-list");
            const li = document.createElement("li");
            li.className = "task";

            // create checkbox 
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "sq";
            checkbox.addEventListener("change", completeTask);

            // text(task)
            const taskText = document.createElement("span");
            taskText.innerText = newTaskText;

            // X button for delete task
            const deleteBtn = document.createElement("span");
            deleteBtn.className = "delete-btn";
            deleteBtn.innerText = "x";
            deleteBtn.addEventListener("click", deleteTask);

            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            document.getElementById("newTask").value = "";

            count++;
        }
    }
}

// Here we cross out our task
function completeTask() {
    const taskText = this.nextElementSibling;
    if (this.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

// Here we delete our task
function deleteTask() {
    this.parentElement.remove();
}

let countdown;
        
// starting the countdown
function startTimer() {
    const durationInput = document.getElementById('duration');
    const timerDisplay = document.getElementById('timer');
    const duration = parseInt(durationInput.value);

    // check for validation
    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid timer duration.');
        return;
    }

    let startTime = Date.now();
    const endTime = startTime + (duration * 1000);

    updateTimerDisplay(duration, timerDisplay);
    document.getElementById('duration').value="";
    countdown = setInterval(function () {
        const timeLeft = Math.max(0, endTime - Date.now());
        if (timeLeft === 0) {
            clearInterval(countdown);
            alert('Timer expired!');
        } else {
            updateTimerDisplay(Math.ceil(timeLeft / 1000), timerDisplay);
        }
    }, 1000);
}

// converts seconds to minutes
function updateTimerDisplay(seconds, display) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    display.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
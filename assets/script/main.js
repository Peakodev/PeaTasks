const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const input = $('#task-input')
const submitBtn = $('.task-add')
const tasks = $('.task-list')
const listE = []
let key = {
  cur: null,
  get() {
    return this.cur
  },
  reset() {
    this.cur = null
  },
  listen() {
    addEventListener(
      "keydown",
      (e) => {
        key.cur = (e.keyCode ? e.keyCode : e.which)
      });
  }
}

key.listen()
input.addEventListener('keyup',() => { if(key.get() == 13) submitBtn.click();})

submitBtn.addEventListener('click',newTask)
function newTask() {

  if(input.value == ``) return false

  let task = document.createElement('div')
  task.classList.add('task-item')
  listE.push(task)
  

  task.innerHTML = `
      <div class="task-done">
        <i class='bx bx-check'></i>
        <i class='bx bx-run'></i>
      </div>
      <p class="task-text"> ${input.value} </p>
      <i class='task-del bx bx-x'></i>
      `
    let btn = task.querySelector('.task-del')
    let done = task.querySelector('.task-done')

    btn.addEventListener('click',() => {
      task.remove()
    })

    done.addEventListener('check',() => {
      console.log(1)
      task.classList.toggle("done")
    })

    task.addEventListener('click',() => {
      task.classList.toggle("done")
    })

    tasks.appendChild(task)

    input.value = ""
}


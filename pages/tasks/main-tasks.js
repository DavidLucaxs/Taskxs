const btn_taskToday = document.getElementById("tarefas_hoje")
const btn_allTasks = document.getElementById("todas-tarefas")
const div_allTasks = document.getElementById("todas_tarefas")
const div_DaylyTasks = document.getElementById("tarefas_diarias")

const ativado = 1 //Um para o btn_taskToday e 2 para o outro botao

const ativar = (btn_number) =>{
    if(btn_number == 1){
        if(!btn_taskToday.classList.contains("ativado")){
            btn_taskToday.classList.add("ativado")
            btn_allTasks.classList.remove("ativado")
            div_DaylyTasks.style.display = "flex"
            div_allTasks.style.display = "none"
        }
    }else{
        if(!btn_allTasks.classList.contains("ativado")){
            btn_allTasks.classList.add("ativado")
            btn_taskToday.classList.remove("ativado")
            div_DaylyTasks.style.display = "none"
            div_allTasks.style.display = "flex"
        }
    }
}
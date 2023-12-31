//Para esconder e ativar as divs
const btn_taskToday = document.getElementById("tarefas_hoje")
const btn_allTasks = document.getElementById("todas-tarefas")
const div_allTasks = document.getElementById("todas_tarefas")
const div_DaylyTasks = document.getElementById("tarefas_diarias")

const cover = document.getElementById('cover')

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

const desativar_criador=()=>{
    cover.style.display = 'none'
}

const ativar_criador=()=>{
    cover.style.display = 'flex'

}
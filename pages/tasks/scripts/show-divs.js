//Para esconder e ativar as divs
const btn_taskToday = document.getElementById("tarefas_hoje")
const btn_allTasks = document.getElementById("todas-tarefas")
const div_allTasks = document.getElementById("todas_tarefas")
const div_DaylyTasks = document.getElementById("tarefas_diarias")

//Parte parent que fica encondido
const cover = document.getElementById('cover')

//Para mostrar as abas de todas as tarefas e as tarefas diarias
const ativar = (btn_number) =>{
    if(btn_number == 1){ //Mostrar tarefas de hoje
        if(!btn_taskToday.classList.contains("ativado")){
            btn_taskToday.classList.add("ativado")
            btn_allTasks.classList.remove("ativado")
            div_DaylyTasks.style.display = "flex"
            div_allTasks.style.display = "none"
        }
    }else{//Mostrar tdas as tarefas
        if(!btn_allTasks.classList.contains("ativado")){
            btn_allTasks.classList.add("ativado")
            btn_taskToday.classList.remove("ativado")
            div_DaylyTasks.style.display = "none"
            div_allTasks.style.display = "flex"
        }
    }
}






//Funcoes para ativar e desativar a aba para criar taredas
const desativar_criador=()=>{
    cover.style.visibility = 'hidden'
}

const ativar_criador=()=>{
    cover.style.visibility = 'visible'

}





//Para dar visibilidade ao seletor de dias da semana
const repetir_opt = document.getElementById("repetir")
const weekdays = document.getElementById("weekdays")

repetir_opt.addEventListener("change",()=>{
    if (repetir_opt.value == "week"){
        weekdays.style.visibility ="visible"
    }else{
        weekdays.style.visibility = "hidden"
    }
})
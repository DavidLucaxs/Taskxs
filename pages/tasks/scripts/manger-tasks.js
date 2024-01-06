//Conseguir dados das tarefas
const input_title_task = document.getElementById("task_title")
const select_filtro_tarefa = document.getElementById("filtro_tarefa")
const i_dias = [...document.querySelectorAll("#weekdays > input[type='checkbox']")]
const select_repetir = document.getElementById("repetir")
const tarefas = []

const get_diassemana = (table) =>{
    filter_table = table.filter((input)=>{
        if(input.checked == true){
            return input
        }
    })
    dias = []
    filter_table.map((input)=>{
        dias.push(input.id)
    })
    return dias
}

document.getElementById("add_task").addEventListener("click",()=>{
    if(select_repetir.value == "no"){
        dias = ""
    }else if(select_repetir.value == "all"){
        dias = "seg ter qua qui sex sab dom"
    }else if(select_repetir.value == "week"){
        array_dias = get_diassemana(i_dias)
        dias = array_dias.join(" ")
    }
    const tarefa = {
        titulo_tarefa : input_title_task.value,
        filtro : select_filtro_tarefa.value,
        repetir : dias
    }
    fetch()
    
    
})
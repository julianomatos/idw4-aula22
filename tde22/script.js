function adicionar(){
    const tarefa = document.getElementById('tarefa').value
    const li =  document.createElement('li')
    li.textContent = tarefa

    const btn = document.createElement('button')
    btn.textContent = 'Remover'
    btn.type = 'button'
    btn.style.marginLeft = '20px'
    btn.addEventListener('click', function(){li.remove()})

    li.appendChild(btn)

    //Verificar se o campo está em branco
    const pendentes = document.getElementById('pendentes')
    pendentes.appendChild(li)

    document.getElementById('tarefa').value = ''
    document.getElementById('tarefa').focus()

}
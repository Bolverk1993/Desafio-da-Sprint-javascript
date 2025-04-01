//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
}
}

function Post(form) {
    event.preventDefault();
 
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
          
            Enviar(data);    
           form.reset();
}

function Enviar(data) {

    if (data && data.nome){
        if(data.email.includes('@') && data.email.includes('.'))  {
        alert('Obrigado sr(a) ' + data.nome +" "+ data.sobrenome+' os seus dados foram encaminhados com sucesso');
        console.log("Dados enviados com sucesso:", {
            nome: data.nome,
            sobrenome: data.sobrenome,
            email: data.email,
            cpf: data.cpf,
            telefone: data.telefone,
            tipoContato: data.tipoContato
})}else{
    alert('Insira um email válido')
return} }
else{
    console.error("Falha no envio: dados incompletos ou inválidos", data);
return
}
}
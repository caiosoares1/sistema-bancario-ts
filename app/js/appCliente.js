let clienteController = new ClienteController();
clienteController.listar();
const cli1 = new Cliente('1', 'Fulano');
const cli2 = new Cliente('2', 'Ciclano');
const cli3 = new Cliente('3', 'Beltrano');
console.log('Cliente: ' + cli1.nome);
let clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);
clientes.listar();
clientes.remover('2');
const clientePesquisado = clientes.pesquisar('3');
if (clientePesquisado) {
    console.log('Cliente encontrado: ' + clientePesquisado.nome);
}
else {
    console.log('Cliente não encontrado');
}

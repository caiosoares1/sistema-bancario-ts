class Clientes {
    private clientes: Array<Cliente> = new Array<Cliente>();

    inserir(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar(): Array<Cliente> {
        return this.clientes;
    }
    
    pesquisar(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
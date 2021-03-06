import React, { Component } from 'react';
class Pagina2 extends Component {
    render() {
        return (
            <div className="pagina">

                <header className="cabec">
                    <h2><b> Cadastro no Lar e Repouso Lirio da Paz</b></h2>
                </header>
                <div>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Senha</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Endereço</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Rua das Margaridas, nº 0" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Familiar responsavel</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Filho(a),Neto,Sobrinho(a) etc." />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Cidade</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputEstado">Estado</label>
                                <select id="inputEstado" class="form-control">
                                    <option selected>Escolher...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputCEP">CEP</label>
                                <input type="text" class="form-control" id="inputCEP" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    CADASTRAR
                                                  </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>

                </div>
            </div>
        );
    }

}
export default Pagina2;
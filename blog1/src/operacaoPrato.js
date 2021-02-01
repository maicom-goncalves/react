import React, { PureComponent } from 'react'
import prato from '../src/img/prato.jpeg';
class OperacaoPrato extends PureComponent {
    

    render() {
        return (
            <div id="prato">
            <h3>A Operação Prato</h3>
            <i>Operação Prato</i>
            <p>
                 Uma história de terror e tragédia familiar tem origem no início do século 16, 
                no México. Em noites de lua cheia, vizinhanças inteiras teriam o 
                sono perturbado pelo choro insistente de uma mulher desesperada. 
                Ela estaria à busca de seus dois filhos.
                Mas encontrá-los seria impossível:
                ela própria haveria matado as crianças.<br/>
                <img src={prato} /><br/>
                Segundo a lenda, essa chorona, como ficaria conhecida, se chamava Maria.
                Apaixonada por um homem que sua família desaprovava, 
                ela decidiu fugir com o amante, e teve dois filhos com ele. 
                Até que, certo dia, Maria descobriu que
                estava sendo traída pelo marido com outra mulher.

                Arrasada e cega de raiva, a mulher pegou seus filhos — 
                símbolos daquele matrimônio desastroso – e os afogou num lago.
                Dois dias depois, quando o ataque de fúria passou, 
                Maria voltou ao rio para encontrar os filhos.
                Descobriu os dois na margem oposta — ambos já sem vida.

                Assim, com a dor insuportável da culpa e do arrependimento, 
                a filicida morreu de depressão. Mas sua agonia não teria acabado 
                com a morte. Desde então, seu fantasma vagaria flutuando pelas cidades, 
                com um vestido branco e um véu que cobre seu rosto pálido. 
                O espectro levanta as mãos para o céu e chora.

                Poderia ser só uma lenda triste se a história não 
                fosse ganhando detalhes assombrosos. Maria não apenas 
                flutuaria aos prantos. Ela também roubaria crianças para substituir as suas.
                Essa lenda é a mais clássica do México, 
                e teve tanto sucesso que vários países
                fizeram adaptações para as suas culturas —
                como o Brasil, com as histórias da bela da noite. 
                Até dentro do próprio México há versões mais 
                ou menos diferentes da lenda original.

                Um dos relatos mexicanos alternativos fala de uma índia que 
                teria se tornado amante de Hernán Cortés, 
                o conquistador espanhol que destruiu o Império Asteca. 
                Ela teria se arrependido de apoiar os colonizadores, 
                e daí a choradeira. 
                Outra versão diz que teria se afogado junto com os filhos.
            </p>
                
            </div>
        )
    }
}

export default OperacaoPrato
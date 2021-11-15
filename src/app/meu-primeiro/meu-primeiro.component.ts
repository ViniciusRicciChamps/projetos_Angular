import { Component } from "@angular/core"; //importa uma biblioteca


//precisa dizer para o Angular que a classe MeuPrimeiroComponent
//é um componente do Angular
//usa um Decorator @
@Component({

    //precisa passar alguns metadados, nome da tag HTML
    selector: 'meu-primeiro-component', /*web-components, permite
    criar componentes HTML customizados*/

    /* Template Literal */
    template: `
        <p>Meu Primeiro Component com Angular!!</p>
    `
})
export class MeuPrimeiroComponent{


}
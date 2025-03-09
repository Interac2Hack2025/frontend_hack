import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMessage {
    text: string;
    sender: 'vendor' | 'user';
}

@Component({
    selector: 'app-delivery-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './delivery_details.component.html',
})
export class DeliveryDetailsComponent {
    chatMessages: ChatMessage[] = [
        { text: "¡Hola! Tu pedido ya está en Viveres El Ejido :D", sender: 'vendor' },
        { text: "¡Genial! Paso por ahí en unos 10 minutos", sender: 'user' },
        { text: "¡Gracias! Solo trae tu teléfono para confirmar tu identidad", sender: 'vendor' },
        { text: "¡Listo! Voy yendo", sender: 'user' }
    ];

    changeToSupport() {
        this.chatMessages = [
            { text: "El pedido llegó aplastado 😔", sender: 'user' },
            { text: "¡Lo sentimos mucho! 😟 Un momento, por favor, estamos revisando...", sender: 'vendor' },
            { text: "Te devolveremos el dinero en tu cartera virtual en los próximos minutos", sender: 'vendor' },
            { text: "¡Gracias! Estaba bastante preocupado por mi dinero... 😓", sender: 'user' },
            { text: "¡No hay problema! En DeUna, tu dinero está siempre seguro 💪", sender: 'vendor' }
        ];
    }    
}

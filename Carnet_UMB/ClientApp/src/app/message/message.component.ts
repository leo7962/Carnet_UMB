import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
/** message component*/
export class MessageComponent {
    /** message ctor */
    constructor() {

    }
    @Input() texto: string;
}

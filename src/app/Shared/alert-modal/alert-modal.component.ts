import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html',
    styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit{
    @Input() error: any;
    @Output() close = new EventEmitter<void>();

    ngOnInit(): void {
    }
    constructor() {
    }

    onCloseClick(){
        this.close.emit(); // we will note sending any thing
    }
}
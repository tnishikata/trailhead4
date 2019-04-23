import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    @track variavel;
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}
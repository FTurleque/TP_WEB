export class CreateHTml {
    constructor(htmlElementName, className, txt = '') {
        this.htmlElementName = document.createElement(htmlElementName);
        this.htmlElementName = className;
        this.txt = txt;
    }
}
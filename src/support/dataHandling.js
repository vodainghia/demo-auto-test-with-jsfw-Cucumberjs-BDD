export default class dataHandling {

    static capitalizeEachWord(str)
    {
        return str.replace(/\w\S*/g, (txt) => 
        {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    static getElementListFromHref(elementList) {
        let elementListReturn = [];
        elementList.forEach(element => {
            element = element.getAttribute('href').split('/');
            elementListReturn.push(element[element.length - 1]);
        });
        return elementListReturn;
    }

    static getElementListFromText(elementList) {
        let elementListReturn = [];
        elementList.forEach(element => {
            elementListReturn.push(element.getText());
        });
        return elementListReturn;
    }

    static getIDList(elementList) {
        let elementListReturn = [];
        elementList.forEach(element => {
            elementListReturn.push(element.id);
        });
        return elementListReturn;
    }

}
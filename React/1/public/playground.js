class React{

    constructor(){
        this.props = {

        }
    }
}

class Page extends React{
    constructor(){
        super()
        this.windows = 5;
    }
}

const car = new Car()
const ford = new Ford()

console.log(ford.windows);
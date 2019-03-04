class React{

    constructor(){
        this.props = {

            "taggeduno":"jeje"

        }
    }
}

class Page extends React{
    constructor(){
        super()
        this.windows = 5;
    }
}

const car = new Page()
const ford = new Page()

console.log(ford.windows);
console.log(car.props.taggeduno)
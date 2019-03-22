import React, { PureComponent } from 'react';

class Life extends PureComponent {

    // // 1 get default props

    // // 2 set default state

    state = {

         title: 'Life Cycles'

    }

    // // 3 before render

    // componentWillMount(){
    //     console.log('Before Render')
    // }

    shouldComponentUpdate(nextProps, nextState){
         
         if(nextState.title === this.state.title){
         return false;
         }
         return true;
     }

    // componentWillReceiveProps(){
    //     console.log('Before Receibe Props')
    // }

    // componentWillUnmount(){
    //     console.log('Unmount')
    // }

    render(){

        console.log('Render ---------')

        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title: 'something else'
                    })}>Click to Change</div>
            </div>
        )
    }

    // //5 after Render

    // componentDidMount(){
    //     console.log('After Render')
    //     document.querySelector('h3').style.color = 'red';
    // }

    // //Change State
    // //Before change State
    // componentWillUpdate(){
    //     console.log('Before Update');
    // }

    // //After Update
    // componentDidUpdate(){
    //     console.log('After Update');
    // }
    
    

}

export default Life;
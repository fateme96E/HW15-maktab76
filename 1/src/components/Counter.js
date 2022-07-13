import React from 'react';
import Button from '../stylesheets/Button';
import Text from '../stylesheets/Text';
import ResetBtn from '../stylesheets/ResetBtn';
import Wraper from '../stylesheets/Wraper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Counter extends React.Component {
    state = {
        number: 0,
      } 

    handleIncreament(){
        this.setState(state => ({
            number: state.number + 1,
        }))
    }

    handleDecrement(){
        this.setState(state => ({
            number: state.number - 1,
        }))
    }

    handleReset() {
        this.setState(state => ({
            number: 0,
        }))
    }

    render() { 
        return (
            <Wraper>
                <Button onClick={()=>this.handleDecrement()}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></Button>
                <Text>{this.state.number}</Text>
                <Button onClick={()=>this.handleIncreament()}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Button>
                <ResetBtn onClick={()=>this.handleReset()}>Reset!</ResetBtn>
            </Wraper>
        );
    }
}
 
export default Counter;
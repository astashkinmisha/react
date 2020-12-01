import React, {Component} from 'react';

class CarComp extends Component {

    render() {

        let {car} = this.props;
        return (
            <div>
                {car.producer} - {car.model} - {car.year} - {car.color} - {car.type} - {car.engine} - {car.volume} - {car.power}

            </div>
        );
    }
}

export default CarComp;
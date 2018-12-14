import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

//--Paso 5: Visualizar información de tarifas
class RateDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: []
        };
        this.goToInit = this.goToInit.bind(this);
    }

    componentDidMount() {
        //TODO: Webservice consultar tarifas
        let rates = [
            { id: 1, description: 'Tarifa 1', rate: '1000' },
            { id: 2, description: 'Tarifa 2', rate: '2000' },
            { id: 3, description: 'Tarifa 3', rate: '3000' },
            { id: 4, description: 'Tarifa 4', rate: '4000' }
        ];
        this.setState({ rates });
    }

    goToInit = e => {
        e.preventDefault();
        this.props.reset();
    };

    render() {
        if (this.props.currentStep == steps.RATE_DISPLAY) {
            return (
                <div>
                    <div className="container-radius">
                        <div className="border-two">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2>&nbsp;</h2>
                                </div>
                                <div className="col-md-12">
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                            <div className="entity-fees">
                                <div className="row text-left justify-content-md-center">
                                    <div className="deco">
                                        <div className="col-md-9 m-100">
                                            <table className="table-rate table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th>Descripción</th>
                                                        <th>Tarifa</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Tarifa 1</td>
                                                        <td>$1.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tarifa 2</td>
                                                        <td>$2.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tarifa 3</td>
                                                        <td>$3.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tarifa 4</td>
                                                        <td>$4.000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-9 text-center">
                                            <p className="legal-5">
                                                Ipsum nulla amet Lorem quis est esse dolor dolore ipsum nulla esse officia velit voluptate. Labore deserunt nisi
                                                aliquip dolore ullamco enim qui minim non occaecat laborum cupidatat culpa ex. Id ut dolor aliquip fugiat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center text-center">
                        <div className="col-md-3">
                            <a className="button button-yellow" href="#" onClick={this.goToInit}>
                                &nbsp;&nbsp;&nbsp;
                                <img src="img/icons/return.png" />
                                CONSULTA OTRA VEZ&nbsp;&nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                    <br />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default RateDisplay;

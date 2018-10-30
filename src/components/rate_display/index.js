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
            { id: 1, description: 'Certificados y referencias Bancarias', rate: '5671' },
            { id: 2, description: 'Comprobante de transacciones / Certificación de las transacciones Viva Voz / Copias de cheques ias', rate: '5671' },
            { id: 3, description: 'Consulta de movimientos / Copia extracto (Por periodo)', rate: '6000' },
            { id: 4, description: 'Consulta de salgo (Cuenta corriente, cuenta de ahorros)', rate: '3850' }
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
                                                        <th>Tarifa (Sin IVA)</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Certificados y referencias Bancarias</td>
                                                        <td>$5.671</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Comprobante de transacciones / Certificación de las transacciones Viva Voz / Copias de cheques ias
                                                        </td>
                                                        <td>$5.671</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Consulta de movimientos / Copia extracto (Por periodo)</td>
                                                        <td>$6.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Consulta de saldo (Cuenta corriente, cuenta ahorros)</td>
                                                        <td>$3.850</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-9 text-center">
                                            <p className="legal-5">
                                                * Las tarifas publicadas no incluyen el IVA. El impuesto se liquidará en cada facturación de acuerdo con lo
                                                establecido en ley.{' '}
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

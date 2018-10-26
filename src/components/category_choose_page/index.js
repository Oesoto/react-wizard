import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

//--Paso 3 - Seleccionar categoría
class CategoryChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOptionSelected: true,
            currentCategory: '',
            categories: []
        };
    }

    componentDidMount(prevProps, prevState) {
        //TODO: Webservice consultar categorías
        let categories = [
            'Canales',
            'Captaciones y giros',
            'Cartera',
            'Leasing',
            'Tarjeta débido, crédito y cajeros',
            'Moneda extrajera',
            'Seguros',
            'Servicios transaccionales',
            'Solución inmobiliaria'
        ];
        this.setState({ categories: categories });
    }

    registerCategory = e => {
        this.setState({
            currentCategory: e.target.value,
            noOptionSelected: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        this.props.onSaveRateData('categoryForRate', this.state.currentCategory);
        this.props.next(steps.WELCOME);
    };

    render() {
        if (this.props.currentStep == steps.CATEGORY_CHOOSE) {
            return (
                <div>
                    <p>Paso 3: Selección de categoría</p>
                    <div>
                        {this.state.categories.map((category, index) => (
                            <button key={index} type="button" name={`button${index}`} value={category} onClick={this.registerCategory}>
                                {category}
                            </button>
                        ))}
                    </div>
                    <br />
                    <button type="button" onClick={() => this.props.back(steps.WELCOME)}>
                        Atrás
                    </button>
                    <button type="button" disabled={this.state.noOptionSelected} onClick={this.dispatchSaveAction}>
                        Siguiente
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default CategoryChoosePage;

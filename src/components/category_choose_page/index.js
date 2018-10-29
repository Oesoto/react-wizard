import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

//--Paso 3 - Seleccionar categoría
class CategoryChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOptionSelected: true,
            idCurrentCategory: 2,
            currentCategory: '',
            categories: []
        };
        this.registerCategory = this.registerCategory.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        //TODO: Webservice consultar categorías
        let categories = [
            { id: 1, category_name: 'Canales' },
            { id: 2, category_name: 'Canales' },
            { id: 3, category_name: 'Captaciones y giros' },
            { id: 4, category_name: 'Cartera' },
            { id: 5, category_name: 'Leasing' },
            { id: 6, category_name: 'Tarjeta débido, crédito y cajeros' },
            { id: 7, category_name: 'Moneda extrajera' },
            { id: 8, category_name: 'Seguros' },
            { id: 9, category_name: 'Servicios transaccionales' },
            { id: 10, category_name: 'Solución inmobiliaria' }
        ];
        this.setState({ categories: categories });
    }

    registerCategory = (e, categoryId) => {
        this.setState({
            idCurrentCategory: categoryId,
            currentCategory: e.target.value,
            noOptionSelected: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        this.props.onSaveRateData([{ categoryForRate: this.state.currentCategory }, { idCategoryForRate: this.state.idCurrentCategory }]);
        this.props.next(steps.SUBCATEGORY_CHOOSE);
    };

    render() {
        if (this.props.currentStep == steps.CATEGORY_CHOOSE) {
            return (
                <div>
                    <p>Paso 3: Selección de categoría</p>
                    <div>
                        {this.state.categories.map((category, index) => (
                            <button
                                key={category.id}
                                type="button"
                                name={`button${category.id}`}
                                value={category.category_name}
                                onClick={e => this.registerCategory(e, category.id)}
                            >
                                {category.category_name}
                            </button>
                        ))}
                    </div>
                    <br />
                    <button type="button" onClick={() => this.props.back(steps.WELCOME_RATE)}>
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

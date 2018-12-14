import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

const initialState = {
    noOptionSelected: true,
    idCurrentCategory: null,
    currentCategory: '',
    categories: [],
    isUntouched: true
};

//--Paso 3 - Seleccionar categoría
class CategoryChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.registerCategory = this.registerCategory.bind(this);
        this.dispatchSaveAction = this.dispatchSaveAction.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        //TODO: Webservice consultar categorías
        let categories = [
            { id: 1, category_name: 'Categoria 1' },
            { id: 2, category_name: 'Categoria 2' },
            { id: 3, category_name: 'Categoria 3' },
            { id: 4, category_name: 'Categoria 4' },
            { id: 5, category_name: 'Categoria 5' },
            { id: 6, category_name: 'Categoria 6' },
            { id: 7, category_name: 'Categoria 7' },
            { id: 8, category_name: 'Categoria 8' },
            { id: 9, category_name: 'Categoria 9' }
        ];
        this.setState({ categories: categories });
    }

    registerCategory = (e, categoryId) => {
        this.setState({
            idCurrentCategory: categoryId,
            currentCategory: e.target.value,
            noOptionSelected: false,
            isUntouched: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        this.props.onSaveRateData([{ categoryForRate: this.state.currentCategory }, { idCategoryForRate: this.state.idCurrentCategory }]);
        this.props.next(steps.SUBCATEGORY_CHOOSE);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        //Recibe los siguientes props y el estado previo
        //Si el componente está marcado como modificado y se debe hacer reset entonces
        //asignar el estado inicial al estado para hacer reset del componente
        if (!prevState.isUntouched && nextProps.reset) {
            return {
                noOptionSelected: true,
                idCurrentCategory: null,
                currentCategory: '',
                isUntouched: true
            };
        } else {
            return {};
        }
    }

    render() {
        if (this.props.currentStep == steps.CATEGORY_CHOOSE) {
            return (
                <div>
                    <p>Paso 3: Selección de categoría</p>
                    <div>
                        {this.state.categories.map((category, index) => (
                            <button
                                key={index}
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
                    <button type="button" onClick={() => this.props.back(steps.YEAR_CHOOSE)}>
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

import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

const initialState = {
    noOptionSelected: true,
    idCurrentSubcategory: null,
    currentSubcategory: '',
    subcategories: [],
    isUntouched: true
};

//--Paso 4: Seleccionar subcategoria tarifas
class SubcategoryChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.registerSubcategory = this.registerSubcategory.bind(this);
        this.dispatchSaveAction = this.dispatchSaveAction.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        //TODO: Webservice consultar subcategorias
        let subcategories = [
            { id: 1, subcategory_name: 'Subcategoria 1' },
            { id: 2, subcategory_name: 'Subcategoria 2' },
            { id: 3, subcategory_name: 'Subcategoria 3' },
            { id: 4, subcategory_name: 'Subcategoria 4' },
            { id: 5, subcategory_name: 'Subcategoria 5' },
            { id: 6, subcategory_name: 'Subcategoria 6' },
            { id: 7, subcategory_name: 'Subcategoria 7' },
            { id: 8, subcategory_name: 'Subcategoria 8' },
            { id: 9, subcategory_name: 'Subcategoria 9' }
        ];
        this.setState({ subcategories });
    }

    //Registrar en el estado datos de la subcategoria
    registerSubcategory = (e, subCategoryId, subCategoryName) => {
        this.setState({
            idCurrentSubcategory: subCategoryId,
            currentSubcategory: subCategoryName,
            noOptionSelected: false,
            isUntouched: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = e => {
        e.preventDefault();
        if (!this.state.isUntouched) {
            this.props.onSaveRateData([{ subcategoryForRate: this.state.currentSubcategory }, { idSubcategoryForRate: this.state.idCurrentSubcategory }]);
            this.props.next(steps.RATE_DISPLAY);
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(' SubcategoryChoosePage -> componentDidUpdate -> prevProps', prevProps);
    //     console.log(' SubcategoryChoosePage -> componentDidUpdate -> curreProps', this.props);
    // }

    render() {
        if (this.props.currentStep == steps.SUBCATEGORY_CHOOSE) {
            return (
                <div>
                    <div className="container-radius">
                        <div className="border-two">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2>Elige la subcategoría</h2>
                                </div>
                                <div className="col-md-12">
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                            <div className="entity-fees">
                                <div className="row justify-content-md-center">
                                    <div className="deco">
                                        <div className="col-md-6">
                                            <div className="select-rate">
                                                <div className="parent">
                                                    <p>Selecciona una</p>
                                                </div>
                                                <div className="children">
                                                    {this.state.subcategories.map(subcategory => (
                                                        <p
                                                            key={subcategory.id}
                                                            onClick={e => this.registerSubcategory(e, subcategory.id, subcategory.subcategory_name)}
                                                        >
                                                            {subcategory.subcategory_name}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center text-center">
                        <div className="col-md-2">
                            <a className="button button-return" onClick={() => this.props.back(steps.CATEGORY_CHOOSE)} href="#">
                                &lt; Atrás
                            </a>
                        </div>
                        <div className="col-md-2">
                            <a className="button button-yellow" disabled={this.state.isUntouched} href="#" onClick={this.dispatchSaveAction}>
                                CONTINUAR
                            </a>
                        </div>
                        <br />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default SubcategoryChoosePage;

import React, { Component } from 'react';
import { steps } from './constants/steps_wizard.js';

//--Paso 2 - Seleccionar vehiculo
// export class VehicleChoose extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//             errors: []
//         };
//         this._onChange = this._onChange.bind(this);
//         this._validate = this._validate.bind(this);
//         this._back = this._back.bind(this);
//     }

//     _onChange(e, { value }) {
//         this.setState({
//             value: value,
//             errors: []
//         });
//     }

//     _validate(e) {
//         e.preventDefault();
//         let value = this.state.value;
//         if (value === 'car') {
//             this.props.next(steps.CAR);
//         } else if (value === 'boat') {
//             this.props.next(steps.BOAT);
//         } else {
//             this.setState({
//                 errors: ['Please choose a vehicle type']
//             });
//         }
//     }

//     _back() {
//         this.props.back(steps.WELCOME);
//     }

//     render() {
//         if (this.props.currentStep == steps.VEHICLE_CHOOSE) {
//             return (
//                 <div>
//                     <p>Paso 2: Selección de vehículo</p>
//                     <button type="button" onClick={this._back}>
//                         Back
//                     </button>
//                     <button type="button" onClick={this._back}>
//                         Next
//                     </button>
//                 </div>
//             );
//         } else {
//         }
//         return null;
//     }
// }

// class BaseForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             type: this.props.type,
//             make: null,
//             model: null,
//             value: null,
//             length: null,
//             errors: []
//         };
//         this._onChange = this._onChange.bind(this);
//         this._validate = this._validate.bind(this);
//         this._back = this._back.bind(this);
//     }

//     _back(e) {
//         e.preventDefault();
//         this.props.back(steps.VEHICLE_CHOOSE);
//     }

//     _onChange(e, { name, value }) {
//         this.setState({
//             [name]: value
//         });
//     }

//     _validate(e) {
//         e.preventDefault();
//         // You can add your validation logic here

//         this.props.saveForm({
//             type: this.props.type,
//             make: this.state.make,
//             model: this.state.model,
//             year: this.state.year
//         });

//         this.props.next(this.props.nextState);
//     }

//     render() {
//         return (
//             <Form>
//                 {this.state.errors.length > 0 && (
//                     <Message negative>
//                         <p>{this.state.errors.join('. ')}</p>
//                     </Message>
//                 )}
//                 <h2>{this.props.type} details:</h2>
//                 <Form.Group widths="equal">
//                     <Form.Input name="make" value={this.state.make} onChange={this._onChange} label="Make" placeholder="Make" />
//                     <Form.Input name="model" value={this.state.model} onChange={this._onChange} label="Model" placeholder="Model" />
//                 </Form.Group>
//                 <Form.Group widths="equal">
//                     <Form.Input name="year" value={this.state.year} onChange={this._onChange} label="Year" placeholder="Year" />
//                     {this.props.type === 'Boat' && (
//                         <Form.Input name="length" value={this.state.length} onChange={this._onChange} label="Length" placeholder="Length" />
//                     )}
//                 </Form.Group>
//                 <Grid>
//                     <Grid.Column floated="left" width={5}>
//                         <Button secondary onClick={this._back}>
//                             Back
//                         </Button>
//                     </Grid.Column>
//                     <Grid.Column floated="right" width={5}>
//                         <Button primary onClick={this._validate}>
//                             Next
//                         </Button>
//                     </Grid.Column>
//                 </Grid>
//             </Form>
//         );
//     }
// }

// export const BoatForm = props => {
//     return <BaseForm type="Boat" next={props.next} back={props.back} saveForm={props.saveForm} nextState={steps.BOAT_DETAIL} />;
// };

// export const CarForm = props => {
//     return <BaseForm type="Car" next={props.next} back={props.back} saveForm={props.saveForm} nextState={steps.CONFIRM} />;
// };

// export class BoatDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this._onChange = this._onChange.bind(this);
//         this._validate = this._validate.bind(this);
//     }
//     _onChange(e) {}

//     _validate(e) {
//         // You can add validation logic here
//         this.props.next(steps.CONFIRM);
//     }

//     render() {
//         let options = [
//             {
//                 text: 'Yes',
//                 value: 'Yes'
//             },
//             {
//                 text: 'No',
//                 value: 'No'
//             },
//             {
//                 text: "Don't Know",
//                 value: "Don't Know"
//             }
//         ];

//         return (
//             <Form>
//                 <h2>Boat History</h2>
//                 <Form.Field>
//                     <label>Has your boat been involved with piracy in the past 12 months?</label>
//                     <Form.Dropdown placeholder="Select Answer" options={options} />
//                 </Form.Field>
//                 <Grid>
//                     <Grid.Column floated="left" width={5}>
//                         <Button secondary onClick={() => this.props.back(steps.BOAT)}>
//                             Back
//                         </Button>
//                     </Grid.Column>
//                     <Grid.Column floated="right" width={5}>
//                         <Button primary onClick={this._validate}>
//                             Next
//                         </Button>
//                     </Grid.Column>
//                 </Grid>
//             </Form>
//         );
//     }
// }

// export class Confirm extends React.Component {
//     render() {
//         /*
//      * Here is our final step. In the real world, we would
//      * obviously do something more complicated than a javascript
//      * alert
//      */
//         return (
//             <Grid>
//                 <Grid.Row>
//                     <p>Your Vehicles:</p>
//                     <List>
//                         {this.props.vehicles.map(i => {
//                             return (
//                                 <List.Item>
//                                     <List.Icon name={i.type === 'Boat' ? 'ship' : 'car'} />
//                                     <List.Content>
//                                         {i.year} {i.make} {i.model}
//                                     </List.Content>
//                                 </List.Item>
//                             );
//                         })}
//                     </List>
//                 </Grid.Row>
//                 <Grid.Row>
//                     <Grid.Column floated="left" width={5}>
//                         <Button onClick={() => this.props.next(steps.VEHICLE_CHOOSE)}>Add Another</Button>
//                     </Grid.Column>
//                     <Grid.Column floated="right" width={5}>
//                         <Button primary onClick={() => alert('Finished!')}>
//                             Get quote
//                         </Button>
//                     </Grid.Column>
//                 </Grid.Row>
//             </Grid>
//         );
//     }
// }

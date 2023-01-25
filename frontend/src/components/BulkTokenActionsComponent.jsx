import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import parse from 'html-react-parser'
import ChassisService from '../services/ChassisService';
import BodyService from '../services/BodyService';
import EngineService from '../services/EngineService';
import TransmissionService from '../services/TransmissionService';
import BrakingService from '../services/BrakingService';
import InteriorService from '../services/InteriorService';
import CordaService from '../services/CordaService'

class BulkTokenActionsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                chassisId: "",
                chassiss: [],
                bodyId: "",
                bodys: [],
                engineId: "",
                engines: [],
                transmissionId: "",
                transmissions: [],
                brakingId: "",
                brakings: [],
                interiorId: "",
                interiors: [],
                party: ""
        }

         this.bulkCreate = this.bulkCreate.bind(this);
         this.bulkDestroy = this.bulkDestroy.bind(this);
         this.bulkTransfer = this.bulkTransfer.bind(this);
         this.issueNew = this.issueNew.bind(this);

         this.handleChassisChange = this.handleChassisChange.bind(this);
         this.handleBodyChange = this.handleBodyChange.bind(this);
         this.handleEngineChange = this.handleEngineChange.bind(this);
         this.handleTransmissionChange = this.handleTransmissionChange.bind(this);
         this.handleBrakingChange = this.handleBrakingChange.bind(this);
         this.handleInteriorChange = this.handleInteriorChange.bind(this);
         this.handlePartyChange = this.handlePartyChange.bind(this);
    }

    componentDidMount(){
        ChassisService.getChassiss().then((res) => {
            this.setState({ chassiss: res.data});
        });
        BodyService.getBodys().then((res) => {
            this.setState({ bodys: res.data});
        });
        EngineService.getEngines().then((res) => {
            this.setState({ engines: res.data});
        });
        TransmissionService.getTransmissions().then((res) => {
            this.setState({ transmissions: res.data});
        });
        BrakingService.getBrakings().then((res) => {
            this.setState({ brakings: res.data});
        });
        InteriorService.getInteriors().then((res) => {
            this.setState({ interiors: res.data});
        });
    }

    bulkCreate = (e) => {
        e.preventDefault();

        let object = this.getObject();

        CordaService.bulkCreateTokens(object, this.state.party).then( res => {
            ReactDOM.render(parse('Bulk Create Tokens status: ' + JSON.stringify(res.data)), document.getElementById('bulkResultsDivId'));
        });
    }

    bulkDestroy = (e) => {
        e.preventDefault();

        let object = this.getObject();

        CordaService.bulkDestroyTokens(object, this.state.party).then( res => {
            ReactDOM.render(parse('Bulk Destroy Tokens status: ' + JSON.stringify(res.data)), document.getElementById('bulkResultsDivId'));
        });
    }

    bulkTransfer = (e) => {
        e.preventDefault();

        let object = this.getObject();

        CordaService.bulkTransferTokens(object, this.state.party).then( res => {
            ReactDOM.render(parse('Bulk Transfer Tokens status: ' + JSON.stringify(res.data)), document.getElementById('bulkResultsDivId'));
        });
    }

    issueNew = (e) => {
        e.preventDefault();

        let object = this.getObject();

        CordaService.issueNew(object, this.state.party).then( res => {
            ReactDOM.render(parse('Issue New Tokens status: ' + JSON.stringify(res.data)), document.getElementById('bulkResultsDivId'));
        });
    }


    getObject() {
        let object = {
            chassisId: this.state.chassisId,
            bodyId: this.state.bodyId,
            engineId: this.state.engineId,
            transmissionId: this.state.transmissionId,
            brakingId: this.state.brakingId,
            interiorId: this.state.interiorId
        };

        return object;
    }

    handleChassisChange = (e) => {
        console.log(e.target.value + " Chassis Selected!!");
        this.setState({ chassisId: e.target.value });
    }
    handleBodyChange = (e) => {
        console.log(e.target.value + " Body Selected!!");
        this.setState({ bodyId: e.target.value });
    }
    handleEngineChange = (e) => {
        console.log(e.target.value + " Engine Selected!!");
        this.setState({ engineId: e.target.value });
    }
    handleTransmissionChange = (e) => {
        console.log(e.target.value + " Transmission Selected!!");
        this.setState({ transmissionId: e.target.value });
    }
    handleBrakingChange = (e) => {
        console.log(e.target.value + " Braking Selected!!");
        this.setState({ brakingId: e.target.value });
    }
    handleInteriorChange = (e) => {
        console.log(e.target.value + " Interior Selected!!");
        this.setState({ interiorId: e.target.value });
    }

    handlePartyChange = (e) => {
        console.log(e.target.value + " Party Selected!!");
        this.setState({ party: e.target.value });
    }

    render() {
        return (
            <div>
                <p/>
                <label> Chassiss: </label>
                <select value={this.state.chassisId} onChange={this.handleChassisChange}>
                    <option value=""> -- Select a chassis -- </option>
                           {}
                        {this.state.chassiss.map((chassis) => <option value={chassis.chassisId}>{chassis.name}</option>)}
                </select>
                <br/>
                <label> Bodys: </label>
                <select value={this.state.bodyId} onChange={this.handleBodyChange}>
                    <option value=""> -- Select a body -- </option>
                           {}
                        {this.state.bodys.map((body) => <option value={body.bodyId}>{body.name}</option>)}
                </select>
                <br/>
                <label> Engines: </label>
                <select value={this.state.engineId} onChange={this.handleEngineChange}>
                    <option value=""> -- Select a engine -- </option>
                           {}
                        {this.state.engines.map((engine) => <option value={engine.engineId}>{engine.name}</option>)}
                </select>
                <br/>
                <label> Transmissions: </label>
                <select value={this.state.transmissionId} onChange={this.handleTransmissionChange}>
                    <option value=""> -- Select a transmission -- </option>
                           {}
                        {this.state.transmissions.map((transmission) => <option value={transmission.transmissionId}>{transmission.name}</option>)}
                </select>
                <br/>
                <label> Brakings: </label>
                <select value={this.state.brakingId} onChange={this.handleBrakingChange}>
                    <option value=""> -- Select a braking -- </option>
                           {}
                        {this.state.brakings.map((braking) => <option value={braking.brakingId}>{braking.name}</option>)}
                </select>
                <br/>
                <label> Interiors: </label>
                <select value={this.state.interiorId} onChange={this.handleInteriorChange}>
                    <option value=""> -- Select a interior -- </option>
                           {}
                        {this.state.interiors.map((interior) => <option value={interior.interiorId}>{interior.name}</option>)}
                </select>
                <br/>
                <br/>
                <label> Party: </label>
                <select value={this.state.party} onChange={this.handlePartyChange}>
                    <option value=""> -- Select a party -- </option>
                    <option value="Notary">Notary</option>
                    <option value="AutomobileCo">AutomobileCo</option>
                    <option value="LicensedDealership">LicensedDealership</option>
                    <option value="UsedPartsAgency">UsedPartsAgency</option>
                    <option value="Buyer">Buyer</option>
                </select>
                <p/>
                            <button className="btn btn-primary btn-sm" onClick={this.bulkCreate}> Bulk Create Tokens</button>
                            &nbsp;<button className="btn btn-primary btn-sm" onClick={this.bulkDestroy}> Bulk Destroy Tokens</button>
                            &nbsp;<button className="btn btn-primary btn-sm" onClick={this.bulkTransfer}> Bulk Transfer Tokens</button>
                            &nbsp;<button className="btn btn-primary btn-sm" onClick={this.issueNew}> Issue New </button>
                <p/>
                <h6> Results </h6>
                <div id="bulkResultsDivId" style={{
                                                height: '400px',
                                                fontSize: '0.8em',
                                                wordBreak: 'break-all',
                                                whiteSpace: 'pre-wrap',
                                                overflow: 'auto'
                                              }}></div>
            </div>
        )
    }
}

export default BulkTokenActionsComponent

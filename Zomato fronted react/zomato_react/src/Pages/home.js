import React from "react";
import '../Style/frontPage.css';
import Banner from "./Banner";
import QuickSearch from "./QuickSearch";
import axios from "axios";
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            location: [],
            mealtype: []
        }
    }


    componentDidMount() {
        //location API
        axios({
            withCredentials: true,
            url: "http://localhost:5500/location",
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON', "Access-Control-Allow-Credentials": true }
        })
            .then(res => {
                this.setState({ location: res.data.location })//fetching data-this.state     editing/updating data-this.setState
            })
            .catch((err => console.log(err)))

        //Mealtype API
        axios({
            withCredentials: true,
            url: "http://localhost:5500/mealtype",
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON',"Access-Control-Allow-Credentials": true }
        })
            .then(res => {
                this.setState({ mealtype: res.data.mealtype })//fetching data-this.state     editing/updating data-this.setState
            })
            .catch((err => console.log(err)))
    }

    // For Modal
    handleModal = (state, value) => {

        this.setState({ [state]: value });
    }

    render() {
        const { location, mealtype, paymentStatusModal } = this.state;
        //console.log(mealtype);
        const status = this.props.payStatus;

        return (
            <div>
                {/* {<!--Banner Part (upper)-->} */}

                <Banner locationData={location} />

                {/* {<!--Quick Searches Part (lower)-->} */}
                <QuickSearch mealtypeData={mealtype} />

                {/* Payment Status modal */}
                {/* {console.log(status)} */}
                {status === "none" || status === undefined ?
                    this.handleModal('paymentStatusModal', false)
                    : this.handleModal('paymentStatusModal', true)
                }
                <Modal
                    isOpen={paymentStatusModal}
                    style={customStyles}
                >
                    <div>
                        {
                            status === "success" ?
                                <div className="payCard">
                                    <input type="button" className="btn btn-outline-success px-4 py-2" onClick={() => window.location.replace('/')} value="Payment Recieved Succesfully!!" />
                                </div> : <div>
                                    <input type="button" className="btn btn-outline-danger px-4 py-2" onClick={() => window.location.replace('/')} value="Payment Failed!!" />
                                </div>

                        }
                    </div>
                </Modal>


            </div>
        )
    }
}

export default Home;
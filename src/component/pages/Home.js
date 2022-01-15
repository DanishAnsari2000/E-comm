import { Button } from 'react-bootstrap'
import { FaFire } from 'react-icons/fa'
import './Home.css'
function Home() {
    return (
        <>
            <div className="body">
                <div className="first-div">
                    <p className="text-danger">EXICUTIVE ACCESS</p>
                    <h1>Unlimited Transactions with zero fees</h1><br />
                    <p>Get access to our exclusive diamond card that allows you to send unliited transction without getting charged any frees
                </p>
                    <Button>Get Started</Button>
                </div>
                <div className="second-div">
                    <img src="https://ant.ivdata.in/v2/assets/images/profile-img.png" />
                </div>
            </div>
            <div className="second_body">
                <div className="first-div_second_body">
                    <img src="https://ant.ivdata.in/v2/assets/images/profile-img.png" />
                </div>
                <div className="second-div_second_body">
                    <p className="text-danger">EXICUTIVE ACCESS</p>
                    <h1>Unlimited Transactions with zero fees</h1><br />
                    <p>Get access to our exclusive diamond card that allows you to send unliited transction without getting charged any frees
                </p>
                    <Button>Get Started</Button>
                </div>
            </div>
            <p>Pricing</p>
            <div className="card d-flex">
                <div className="card_item">
                    <FaFire />
                    <p>Start</p>
                    <p>$8.99</p>
                    <p>per month</p>
                    <p>100 Transactions</p>
                    <p>2% Card Back</p>
                    <p>$10,000 Limit</p>
                    <Button className="">Choose Plan</Button>
                </div><br></br>
                <div className="card_item">
                    <FaFire />
                    <p>Start</p>
                    <p>$8.99</p>
                    <p>per month</p>
                    <p>100 Transactions</p>
                    <p>2% Card Back</p>
                    <p>$10,000 Limit</p>
                    <Button className="">Choose Plan</Button>
                </div>
                <div className="card_item">
                    <FaFire />
                    <p>Start</p>
                    <p>$8.99</p>
                    <p>per month</p>
                    <p>100 Transactions</p>
                    <p>2% Card Back</p>
                    <p>$10,000 Limit</p>
                    <Button className="">Choose Plan</Button>
                </div>
            </div>
        </>
    )
}

export default Home
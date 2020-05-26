import React,{Component} from "react";
import hammer from "./hammer.jfif"

class Item extends Component {

    render() {
        return (
            <div className="d-inline-flex pt-5 justify-content-center" style={{backgroundColor:"powderblue", height:"80vh",width:"65vh"}}>
                <div class="card col-8 text-white bg-dark mb-3">
                    <div class="card-body">
                        <img src={hammer} ></img>
                        <h4 class="card-title">Hand Crafted Thor's Hammmer</h4>
                        <p class="card-text">This is a hand crafted model.It took three weeks to make this.</p>
                        <p class="card-text">Rs. 499</p>
                        <button class="btn btn-outline-primary" type="submit">BUY</button>
                    </div>
                </div>
            </div>                        
        )
    }
}

export default Item;



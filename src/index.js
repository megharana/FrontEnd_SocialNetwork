import GoogleLogin from './GoogleLogin/';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')

var Social = createReactClass({
    render:function(){
        return(
            <div>
                <h2>LOGIN</h2>   
                <p>
                    <GoogleLogin/>
                </p>
            </div>
        );
    }
});

ReactDOM.render(<Social/>,document.getElementById('root'));
    


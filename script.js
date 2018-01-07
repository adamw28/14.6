var Counter = React.createClass({
	getDefaultProps: function(){
		console.log(this);
	},
    getInitialState: function() {
        return {
            incounter: 0,
            decounter: 0,
        };
    },
    componentWillMount: function(){
    	console.log(this);
    },
    componentDidMount: function(){
    	console.log(this);
    },
    increment: function() {
        this.setState({
            incounter: this.state.incounter + 1
        });
    },

    decrement: function() {
        this.setState({
            decounter: this.state.decounter - 1
        });
    },
    render: function() {
        return (React.createElement('div',{},
        			React.createElement('button', {className: 'in', onClick: this.increment},
            		React.createElement('a', {}, 'Licznik ' + this.state.incounter)
        			),
        			React.createElement('button', {className: 'de', onClick: this.decrement},
            		React.createElement('a', {}, 'Licznik ' + this.state.decounter)
        			),
        		)
        )
    },
    componentWillReceiveProps: function(){
    	console.log(this);
    },
    //shouldComponentUpdate: function(){console.log(this);}, nie da się wypisać console.log
    componentWillUpdate: function(){
    	console.log(this);
    },
    componentDidUpdate: function(){
    	console.log(this);
    },
    componentWillUnmount: function(){
    	console.log(this);
    }
});
var counter = React.createElement(Counter);
ReactDOM.render(counter, document.getElementById('app'));
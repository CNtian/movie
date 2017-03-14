var React=require('react');

var Ping=React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://www.cntian.online/php/check.php'
		}
	},
	getInitialState:function(){
		return{
			list:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({url:this.props.url}).then(function(res){
			var res=JSON.parse(res);
			console.log(res)
			_this.setState({
				list:res

			})

		})
	},
	render:function(){
		return (
			<div>
			About
			</div>
			)
	}
})
module.exports=Ping;
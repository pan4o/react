import React from 'react';
import HelloWorld from './hello-world';
import Welcome from './welcome';
import City from './city';
import Comment from './comment';
import Clock from './clock';
import Toggle from './toggle';
import Greeting from './greeting';
import TestButton from './testfunc';
import Mailbox from './mailbox';
import Page from './page';
import NumberList from './number-list';
import Blog from './blog';
import NameForm from './name-form';

var city = {
	url: 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_510,q_75,w_1280/v1/clients/newyorkstate/dumbo_brooklyn_bridge_park_julienne_schaer_0732_fdff1de5-9486-480c-a1c7-4135d784c75f.jpg'
},
author = {
	avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_3BSy4Fj2A9cEewqEunptEL3Bl8OJK8BX0Cw5hb8cbGXokgL',
	name: 'Tom'
},
messages = ['react', 're:react', 're:re:react'],
numbers = [1,2,3,4],
posts = [
	{
		id: 1,
		title: 'Facebook',
		link : 'https://www.facebook.com',
		content: 'this is facebook'
	},
	{
		id: 2,
		title: 'Twitter',
		link: 'https://www.twitter.com',
		content: 'this is twitter'
	},
	{
		id: 3,
		title: 'Instagram',
		link: 'https://www.instagram.com',
		content: 'this is instagram'
	}
];



class Main extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			first: 'first',
			second: 'second'
		}

	}

	componentDidMount() {

		const duration = 2000;

		this.timer = setTimeout(() => {

			this.setState({
				first: 'second'
			});

			this.timer2 = setTimeout(() => {

				this.setState({
					second: 'first'
				});

			}, duration)

		}, duration);

	}

	render () {
		return (
			<div className="hello-container">
				<HelloWorld background="blue" />

				<Welcome name="Serhii" />

				<Welcome name="Dasha" />

				<City
					src={city.url}
					name="New Yourk"
				/>

				<Comment author={author} text="This is a text, dude" />

				<Clock />

				<p>{this.state.first}</p>

				<p>{this.state.second}</p>

				<Toggle />

				<Greeting isLoggedIn={false} />

				<Greeting isLoggedIn={true} />

				<TestButton onClick={() => {console.log('test')}}/>

				<Mailbox unreadMessage={messages} />

				<Page />

				<NumberList numbers={[1,2,3,4,5,6,7]} />

				<Blog posts={posts} />

				<NameForm />
			</div>
		);
	}

}

export default Main;
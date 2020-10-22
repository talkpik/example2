import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import About from "./components/About"
import Posts from "./components/Posts"
function App() {

	return (
		<Router>
			<div>
				<nav style={{ margin: 10 }}>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>
					<NavLink to='/about' activeClassName='active'>
						About
					</NavLink>
					<NavLink to='/posts' activeClassName='active'>
						Posts
					</NavLink>
				</nav>
				{/* <Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/posts' exact component={Posts} />
				<Route path='/posts/:postId' exact component={Posts} /> */}

				<Route exact path="/" component={()=><Home/>} />
  				<Route exact path="/about" component={()=><About/>} />
  				<Route exact path="/posts" component ={()=><Posts/>}/>
			</div>
		</Router>
	)
}

export default App

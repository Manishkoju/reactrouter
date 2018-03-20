import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

//Components
import Posts from './component/post';
import Profile from './component/profile';
import PostsItem from './component/post_items';
import NotFound from './component/notfound';




class App extends Component{
    render()
    {
       return <div>Home Page</div>
        
    }
}

ReactDOM.render(
<BrowserRouter>
    <div>
       <header>
           <NavLink to="/" activeStyle={{color:'red'}} activeClassName="selected">Home</NavLink><br/>
           <NavLink to="/profile" activeStyle={{color:'red'}}  activeClassName="selected">Profile</NavLink><br/>
           <NavLink to="/posts" activeStyle={{color:'red'}}  activeClassName="selected">Post</NavLink><br/>
           <hr/>
       </header>
    <Switch>
       <Route path="/posts/:id" component={PostsItem}></Route> 
       <Route path="/posts" component={Posts}></Route>
       <Route path="/profile" component={Profile}></Route>
       <Route  exact path="/" component={App}></Route>  
       <Route path="*" Component={NotFound}></Route>          
    </Switch>     
    </div>
</BrowserRouter>,document.querySelector('#root'));
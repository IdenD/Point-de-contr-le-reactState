import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import ProfilCard from './profilCard'


export default class App extends Component {
    person = {
        fullName: 'Louis Nercié',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, distinctio. Itaque odit natus quae officiis placeat dolore neque, voluptas aspernatur ea animi? Quod enim voluptas mollitia? Non pariatur architecto aliquam.',
        imgSrc:'https://img.freepik.com/photos-gratuite/rendu-3d-avatar-appel-zoom_23-2149556785.jpg?t=st=1717683693~exp=1717687293~hmac=882fb53d6b4831e0cf9174681bfd23cd4fada922660775b716db45aa2b42d179&w=1380 ',
        profession: 'Developpeur Full stack'
    }

    state = {
        isShow: false,
    };

    handleTrueClick = () =>
        this.setState(this.setState({isShow: true}))
    
    handleFalseClick = () =>
        this.setState(this.setState({isShow: false}))

  render() {
    if(this.state.isShow){
        return (
            <div>
                <button onClick={this.handleFalseClick} style={{paddingInline:'30px', color:'white', paddingBlock:'10px', backgroundColor:'#3742fa', border:'1px solid white', borderRadius:'5px', width:'200px'}}>Masquer le profil</button>
                <ProfilCard 
                fullName={this.person.fullName}
                bio={this.person.bio}
                imgSrc={this.person.imgSrc}
                profession={this.person.profession}
                />
                
            </div>
        )
    }
    else {
         return (
            <>
                <button onClick={this.handleTrueClick} style={{paddingInline:'30px', color:'white', paddingBlock:'10px', backgroundColor:'#2ed573', border:'1px solid white', borderRadius:'5px', width: '200px'}}>Voir le profil</button>
            </>
        )
    }
   
  }
}



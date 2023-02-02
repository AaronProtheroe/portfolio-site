import './Profile.css'
import './assets/IMG_6717.JPG'

function Profile() {

    return(
        <div className='profile_section'>

            <div className='who_am_i'>
                <h2>I am Aaron Protheroe</h2>
                <h3>Aspring Software developer</h3>
            </div>
            
            <img src={require('./assets/IMG_6717.JPG')} alt=''/>
            
        </div>
    )
}

export default Profile;
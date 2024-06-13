import '../App.css'
import './Contact.css'
import InputForm from '../Components/InputForm.js'
import AreaForm from '../Components/AreaForm.js'
import page from '../page.js'



export default function Contact () { 


    

    return ( 
<div>
<h2 className='ContactTitle'>Contact me anytime yout want</h2>


{/** Input Form **/}
<InputForm/>

{/** Title Message **/}

<h3>Type your Message</h3>

{/** Area Form **/}

<AreaForm/>





<button type="button" className="Sendbutton" >
      Send 
    </button>

   <img src='https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/415010908_2693870304112536_69788573037523592_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DBk0FBPGBBsQ7kNvgFdj-J8&_nc_ht=scontent.ftun15-1.fna&oh=03_Q7cD1QGa82-PP9Ct9i6Y7ZofVYHfDgeNoz1-eJFHVLy0Y7mrVQ&oe=6692884F' alt='ContactMe'className='ContactMe' ></img>





</div>




    );
}
import React from 'react'
import emailjs from 'emailjs-com' 

const Mailer = () => {
    function sentEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_qhxvpbc','template_395ab6m',e.target,'user_hMSXOwQqsDiffa4ULEg41').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container border" style={{marginTop:"50px",width:"50%",
        backgroundImage:`url('https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg')`,
        backgroundPosition:'center',
        backgroundSize:"cover"
        }}>
            <h1 style={{marginTop:'25px'}}>Email Sender and Editor</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sentEmail}>
                <label >Name</label>
                <input type="text" name="name" className="form-control"/>
                <label >Reciever Name</label>
                <input type="text" name="rname" className="form-control"/>
                <label >Reciever Email</label>
                <input type="email" name="user_email" className="form-control"/>
                <label >Message</label>
                <textarea name="message" rows="4" className="form-control"></textarea>
                <input type="submit" value='send' className="form-control btn btn-primary" style={{marginTop:"30px"}} />
            </form>
            <input type="submit" value='Edit existing template' className="form-control btn btn-primary" style={{marginBottom:"40px"}} />
        </div>
    )
}

export default Mailer

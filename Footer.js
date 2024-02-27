import React from 'react'


export default function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-link_div'>
                        <h4>Company</h4>
                        <a href='/' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>About </p>
                        </a>
                        <a href='/about' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Team</p>
                        </a>
                        
                        <a href='/contact' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Blog</p>
                        </a>

                        <a href='/mission' style={{
    textDecoration: 'none',
    color: 'white',
}}>
    <p>Mission</p>
</a>
<a href='/community' style={{
    textDecoration: 'none',
    color: 'white',
}}>
    <p>Community</p>
</a>
<a href='/testimonials' style={{
    textDecoration: 'none',
    color: 'white',
}}>
    <p>Testimonials</p>
</a>
<a href='/review' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Contact us</p>
                        </a>


                    </div>
                    <div className='sb_footer-link_div'>
                        <h4>Contact us</h4>
                        
                        <a href='/login' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Help & Support</p>
                        </a>
                        <a href='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            
                            <p>Partner with us</p>
                        </a>
                        
                    </div>
                    <div className='sb_footer-link_div'>
                        <h4>Legal</h4>
                        
                        <a href='/login' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Terms & Conditions</p>
                        </a>
                        <a href='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            
                            <p>Cookie Policy</p>
                        </a>
                        <a href='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            
                            <p>Privacy Policy</p>
                        </a>
                        
                    </div>
                    <div className='sb_footer-link_div'>
                        <h4>Account</h4>
                        
                        <a href='/login' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            <p>Signin/Register</p>
                        </a>
                        <a href='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            
                            <p>My Wishlist</p>
                        </a>
                        <a href='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}>
                            
                            <p>Feedback</p>
                        </a>
                        
                    </div>
            
                   
                    <div className='sb_footer-links_div'>
                        <h4>Social Links</h4>
                        <div className='socialmedia'>
                            <a href="/facebook" className="round-icon facebook">
                                <i className="fa-brands fa-facebook-f" />
                                </a>
                            <a href="instagram" className="round-icon instagram">
                                <i className="fab fa-instagram" /></a>
                            <a href="twitter" className="round-icon twitter">
                                <i className="fab fa-twitter" /></a>
                                <a href="youtube" className="round-icon youtube">
                                <i className="fab fa-youtube" /></a>
                        </div>
                    </div>
                </div>
                <hr></hr>
              
            </div>

        </div>
    );
}
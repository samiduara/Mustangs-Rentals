// import React, { Component } from 'react';

// import { connect } from 'react-redux';

// class Footer extends React.Component{
//     render(){
//     return (
//         <div className={this.props.progress===2 ? 'meganav navbar navfooter-results' : 'meganav navbar navfooter' }>
//             <div className="container large footer">
//                 <div className="footer-object"> 
//                     <p className="footer-subtitle">mustangrentals</p>
//                     <ul className="footer-list">
//                         <li>Home</li>
//                         <li>Privacy</li>
//                         <li>Services</li>
//                         <li>Partners</li>
//                         <li>News</li>
//                     </ul>
//                 </div>
//                 <div className="footer-object"> 
//                     <p className="footer-subtitle">About</p>
//                     <ul className="footer-list">
//                         <li>Latest News</li>
//                         <li>Press Release</li>
//                         <li>Careers</li>
//                         <li>Terms of use</li>
//                     </ul>
//                 </div>
//                 <div className="footer-object"> 
//                     <p className="footer-subtitle">Support</p>
//                     <ul className="footer-list">
//                         <li>Contact us</li>
//                         <li>Find your invoice</li>
//                         <li>FAQ</li>
//                     </ul>
//                 </div>
//                 <div className="footer-object"> 
//                     <p className="footer-subtitle">Recent Tweets</p>
//                     <ul className="footer-list">
//                         <li>@sam i love mustang rentals so much, do you too?</li>
//                     </ul>
//                 </div>
//                 <div className="footer-object highlight"> 
//                     <p className="footer-support highlight">Online Support</p>
//                     <p className="footer-number">+1 (469) 000 000</p>
//                     <p className="footer-email">sales@mustangrentals.com</p>
//                 </div>

//             </div>
//         </div>
//     )
//     }
// }

// const mapStateToProps = state => ({
//     ...state
// });

// export default connect(mapStateToProps)(Footer);
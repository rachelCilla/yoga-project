// import React, { useState } from 'react';
// import axios from 'axios';


// export default function Auth({ handleClose }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    
    
//     // run on submit
//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         // send email and password to server
//         try {
//             const response = await axios.post(`${config.serverUrl}/register`,
//               { email, password }
//             );
      
//             console.log('User has been created');
//             handleClose();
//         }
//           catch(err){
//             // Handle error (e.g., show error message)
//             console.log(err);
//         }
//     };

//   return (
//     <div className="signup-modal">
//       <div className="signup-modal-content">
//         <h2>Sign Up</h2>
//         {/* Enter Email */}
//         <form onSubmit={handleSignUp}>
//             <input type="email" 
//             placeholder='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />
//             {/* Enter Password */}
//             <input type="password"
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Submit</button>
//             <button onClick={handleClose}>Never mind, take me back</button>
//         </form>
//       </div>
//     </div>
//   );
// }

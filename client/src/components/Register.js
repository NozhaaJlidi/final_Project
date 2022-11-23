import { useState } from "react"
import { useDispatch } from "react-redux";
import "../styles/login.css"
import { userRegister } from "../redux/userSlice";
import {Link} from'react-router-dom'
const Register = () => {
  const [user, setUser] = useState({})


  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);

    setUser({ ...user, options: updatedList })
  };
  const dispatch = useDispatch()
  return (<>
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <div className="user-box">
          <input type="text" name="Nom " required="" placeholder='Nom'
            onChange={(e) => setUser({ ...user, nom: e.target.value })} />
          <label>Nom</label>
        </div>
        <div className="user-box">
          <input type="text" name="Prenom" required="" placeholder='Prénom'
            onChange={(e) => setUser({ ...user, prenom: e.target.value })} />
          <label>Prenom </label>
        </div>
        <div className="user-box">
          <input type="text" name="email" required="" placeholder='Email'
            onChange={(e) => setUser({ ...user, email: e.target.value })} />

          <label>Email </label>
        </div>
        <div className="user-box">
          <input type="text" name="adresse" required="" placeholder='Adresse'
            onChange={(e) => setUser({ ...user, adresse: e.target.value })} />

          <label>Adresse </label>
        </div>

        <div className="user-box">
          <input type="password" name="" required="" placeholder='password'
            onChange={(e) => setUser({ ...user, password: e.target.value })} />

          <label>Password</label>
        </div>


      </div>
      <div className="user-radio">

        <label>Homme
          <input type="radio" id="type1" name="Gender" value='Homme'
            onChange={(e) => setUser({ ...user, sexe: e.target.value })}
          />
        </label>
        <label>
          <input type="radio" id="type2" name="Gender" value='Femme'
            onChange={(e) => setUser({ ...user, sexe: e.target.value })} />
          Femme</label>

      </div>
      <div className="submit">
      <button onClick={() => { dispatch(userRegister(user)) }}>Submit
      </button>

<h5> you already have an account 
  <Link to="/login"> Sign in</Link>
</h5>
</div>
    </div>


  </>)
}

export default Register
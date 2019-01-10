import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { email : '', pass : '', visibility: false }
        this.handleLogin = this.handleLogin.bind(this);
        this.controlInput = this.controlInput.bind(this);
        this.controlInput1 = this.controlInput1.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.onBlur = this.onBlur.bind(this)
    }
    handleLogin() {
        if(this.state.email === 'admin'){
            if(this.state.pass === '12345'){
                alert("Welcome! you are logged In");
            }
            
            else{
                alert('wrong password !!!');
            }        
        } 
        
        else{
            alert('wrong email or number !!!');
        }
    }

    
    controlInput(e){
        this.setState({email: e.target.value})
    }
    controlInput1(event){
        this.setState({pass: event.target.value})
    }
    toggleView(){
        if(this.state.toggleView){
        this.setState ({visibility: true})
    }
        else{
            this.setState ({visibility: false})
        }
    }
    onBlur() {
        if(!this.state.email || !this.state.pass){
           this.setState({toggleView: true})
       } else {
           this.setState({toggleView: false})
       }
    }
  render() {
    return (
      <div className="App">
          <div className="navbar">
            <div className="left">
                <h1>
                    <b>ImageBook</b>
                </h1>
            </div>
            <div className="right">
                <div>
                    <p>Email or Phone </p>
                    <input onBlur={this.onBlur} type="text" id="myText" value={this.state.email} onChange={this.controlInput}/> 
                    {this.state.toggleView && <p className="user">An email or username is required to log in.</p>}
                </div>
                <div>
                    <p>Password</p>
                    <input onBlur={this.onBlur} type="password" id="myText" value={this.state.pass} onChange={this.controlInput1}/>
                    
                    {this.state.toggleView && <p className="user">A password required to log in.</p>}
                </div>

                <div className="click">
                    <button onClick={this.handleLogin}>LogIn</button>
                </div>
            </div>
        </div>
        <div className="signUp">
            <h2>Create a new account</h2>
            <p>It's free and always will be.</p>
            <form>
                <div className="form-row">

                    <input className="form-control" type="text" placeholder="First name"/>


                    <input className="form-control" type="text" placeholder="Surname"/>

                </div>
                <div className="form-row">
                    <input className="form-control" type="text" placeholder="Mobile number or email" readonly/>
                </div>
                <div className="form-row">
                    <input className="form-control" type="text" placeholder="Password" readonly/>
                </div>
            </form>            
            <div className="dropdown">
                <div className="control-group">
                    <label for="dob-day" className="control-label">Birthday</label>
                    <div className="controls">
                        <select name="dob-day" id="dob-day">
                            <option value="">Day</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="dob-month" id="dob-month">
                            <option value="">Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select name="dob-year" id="dob-year">
                            <option value="">Year</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                            <option value="1904">1904</option>
                            <option value="1903">1903</option>
                            <option value="1901">1901</option>
                            <option value="1900">1900</option>
                        </select>
                    </div>
                </div>

                <p className="active">Why do I need to provide my date of birth?</p>

            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <p className="active"><span>By clicking Sign Up, you agree to our Terms,</span> <span>Data Policy and Cookie Policy. You may receive SMS notifications
                from us and can opt out at any time.</span>
            </p>
            <button className="submit">Sign Up</button>
        </div>
        </div>

    );
  }
}

export default App;

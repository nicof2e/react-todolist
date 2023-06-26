import logo from '../src/images/img.png';
import img from '../src/images/logo_lg.png';
import Login from '../src/components/Login';
import Register from '../src/components/RegisterPage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
        <Router>
          <section id="login" className="section-wrap">
              <div className="container p-relative d-flex align-center justify-content-center flex-direction-column">
                  <div className="row" style={{width:'800px'}}>
                      <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="side d-flex align-items-center flex-direction-column">
                            <img src={img} className="img" alt="img" />
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-center justify-content-center">
                          <Routes>
                            <Route path="/" element={<Login />} /> {/*首頁載入元件*/}
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                          </Routes>
                      </div>
                  </div>
              </div>
          </section>
        </Router>
  );
}

export default App;

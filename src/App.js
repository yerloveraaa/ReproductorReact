import { Player} from './component/Reproductor'
import './App.css'
function App() {
  return (
    <div className="container-fluid " >
      <div className="row">
      <div className=" col  styled">
       <img className="avatar" src="https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/101210726_1456396114567284_872501084101279744_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFM2nzxsDEcedEeBgJXJEMILIDALvVPrfksgMAu9U-t-WHXCnXwC8u9elTpdH6SxvYDDbnaPIW6MDAN7qesp-09&_nc_ohc=RfF6vkYEnLcAX8EdXo4&_nc_ht=scontent.fsti4-1.fna&oh=17e77485dd011c32a798d59b211742ec&oe=5FD2123E" /> 
    
        </div>
 
        <div className="col mt-2">
       < Player/>
        </div>
      </div>
   


    </div>
  );
}

export default App;

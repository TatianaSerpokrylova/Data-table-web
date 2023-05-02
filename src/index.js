import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/app';

const strFromJSON = JSON.parse ('[{"id":1,"first_name":"Pascale","last_name":"Elstob","birthday":"21.07.1974","accumulated_points":197},{"id":2,"first_name":"Charley","last_name":"Monkleigh","birthday":"18.07.1977","accumulated_points":138},{"id":3,"first_name":"Frannie","last_name":"Shallcross","birthday":"25.09.1967","accumulated_points":289},{"id":4,"first_name":"Noella","last_name":"Lidbetter","birthday":"03.01.1989","accumulated_points":83},{"id":5,"first_name":"Myrle","last_name":"Cadany","birthday":"13.03.1956","accumulated_points":11},{"id":6,"first_name":"Mavra","last_name":"Phillips","birthday":"10.07.1960","accumulated_points":106},{"id":7,"first_name":"Roz","last_name":"Bonnavant","birthday":"13.06.1970","accumulated_points":126},{"id":8,"first_name":"Chastity","last_name":"Leguay","birthday":"15.04.1961","accumulated_points":278},{"id":9,"first_name":"Halie","last_name":"Maryon","birthday":"26.03.1979","accumulated_points":30},{"id":10,"first_name":"Abie","last_name":"Kelby","birthday":"22.09.1975","accumulated_points":270},{"id":11,"first_name":"Clare","last_name":"Nuth","birthday":"27.09.1969","accumulated_points":260},{"id":12,"first_name":"Mahmud","last_name":"Bolingbroke","birthday":"25.06.1958","accumulated_points":112},{"id":13,"first_name":"Xylia","last_name":"Stanyard","birthday":"10.08.1955","accumulated_points":147},{"id":14,"first_name":"Buckie","last_name":"Coppens","birthday":"25.09.1996","accumulated_points":20},{"id":15,"first_name":"Kym","last_name":"Anselm","birthday":"21.04.1980","accumulated_points":237},{"id":16,"first_name":"Nettie","last_name":"Tellenbrok","birthday":"13.03.2000","accumulated_points":90},{"id":17,"first_name":"Chaddy","last_name":"Dorie","birthday":"20.09.1985","accumulated_points":156},{"id":18,"first_name":"Chrysler","last_name":"Stebbins","birthday":"21.06.1978","accumulated_points":280},{"id":19,"first_name":"Clarinda","last_name":"Sigert","birthday":"08.06.1993","accumulated_points":206},{"id":20,"first_name":"Hillie","last_name":"Amis","birthday":"16.06.1987","accumulated_points":115}]');

console.log("strFromJSON",strFromJSON);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




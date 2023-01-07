import axios from 'axios';


async function AdviseApi(){
   const url = "https://api.adviceslip.com/advice"
   const AllApi = await axios.get(url);
   return AllApi;
}

export default AdviseApi;
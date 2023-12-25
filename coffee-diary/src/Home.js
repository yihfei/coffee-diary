import useFetch from "./UseFetch";
import BrewList from "./BrewList";

const Home = () => {
    
    const {data : brews, isPending, Error, setData : setBrews} = useFetch('http://localhost:3030/brews')
    
    return ( 
        <div>
            {brews && <BrewList brews = {brews} setBrews = {setBrews}/> }
        </div>
     );
}
 
export default Home;
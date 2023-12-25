import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Edit = () => {
    const { id } = useParams();
    const [coffeeType, setCoffeeType] = useState('');
    const [amountUsed, setAmountUsed] = useState('');
    const [grindSetting, setGrindSetting] = useState('');
    const [waterTemperature, setWaterTemperature] = useState('');
    const [pours, setPours] = useState([{ pourNumber: 1, volume: '' }]);
    const [totalDrainTime, setTotalDrainTime] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3030/brews/${id}`);
            const data = await response.json();
            setCoffeeType(data.coffeeType);
            setAmountUsed(data.amountUsed);
            setGrindSetting(data.grindSetting);
            setWaterTemperature(data.waterTemperature);
            setPours(data.pours);
            setTotalDrainTime(data.totalDrainTime);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [id]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const brew = {
            coffeeType,
            grindSetting,
            waterTemperature,
            pours,
            totalDrainTime,
          };
    
        fetch('http://localhost:3030/brews/' + id, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(brew)
        }).then(() => {
          console.log('brew edited');
          navigate('/');
        })
      }

      const handleAddPour = () => {
        const nextPourNumber = pours.length + 1;
        setPours([...pours, { pourNumber: nextPourNumber, volume: '' }]);
      };

      return (
        <div className="edit">
          <h2>Edit this Brew</h2>
          <form onSubmit={handleSubmit}>
            <label>Coffee Type:</label>
            <input 
              type="text" 
              required 
              value={coffeeType}
              onChange={(e) => setCoffeeType(e.target.value)}
            />
            <label>Amount Used:</label>
            <input 
              type="text" 
              required 
              value={amountUsed}
              onChange={(e) => setAmountUsed(e.target.value)}
            />
            <label>Grind Setting:</label>
            <input 
              type="text" 
              required 
              value={grindSetting}
              onChange={(e) => setGrindSetting(e.target.value)}
            />
            <label>Water Temperature:</label>
            <input 
              type="text" 
              required 
              value={waterTemperature}
              onChange={(e) => setWaterTemperature(e.target.value)}
            />
            <label>Pours:</label>
            {pours.map((pour, index) => (
              <div key={index}>
                <p>{`Pour ${pour.pourNumber}`}</p>
                <input
                  type="text"
                  placeholder="Volume"
                  value={pour.volume}
                  onChange={(e) => {
                    const updatedPours = [...pours];
                    updatedPours[index].volume = e.target.value;
                    setPours(updatedPours);
                  }}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddPour}>
              Add Another Pour
            </button>
            <label>Total Drain Time:</label>
            <input 
              type="text" 
              required 
              value={totalDrainTime}
              onChange={(e) => setTotalDrainTime(e.target.value)}
            />
            <button>Edit Brew</button>
          </form>
        </div>
      );
    }

 
export default Edit;
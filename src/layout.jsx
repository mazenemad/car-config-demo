
import { useEffect,useState } from "react";
const colors = ['#DB9B3A', '#5A7184', '#8E6C88', '#3D405B', 'black']; // Add more dark colors as needed
let Layout = ({setPaint,setWheel,wheel,paint})=>{
    useEffect(()=>{
        console.log(wheel,paint,'lay')
    },[paint,wheel])
    return(<>
        <div  className="w-full h-full bg-black">
        <div className="ml-10 mt-5">
            <h2 className="text-white font-mono text-2xl">MODELS</h2>
            <h1 className="text-white font-mono text-6xl">URUS</h1>
        </div>
        <div className="ml-10 mt-16 flex flex-row gap-16">
                <p className="text-white text-2xl">model <span className={`text-[#DB9B3A]`}>2022</span></p>
                <p className="text-white text-2xl">Price <span className={`text-[#DB9B3A]`}>$10000</span></p>
                {/* <p className="text-white text-2xl">model:2022</p> */}
        </div>
            <div className="h-[200px] w-fit">
                <div className="text-white text-center text-4xl mt-16">Paint</div>
                <DarkColorPicker setColor={setPaint} colors={colors}/>
            </div>
            <div className="h-[200px] w-fit">
                <div className="text-white text-center text-4xl mt-16">Wheels</div>
                <DarkColorPicker setColor={setWheel} colors={["black","white"]}/>
            </div>
        </div>
    </>)
}


const DarkColorPicker = ({colors,setColor}) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [customColor, setCustomColor] = useState('');
  
    const selectColor = (color) => {
    //   setSelectedColor(color);
    console.log(color)
      setColor(color)
    };
  
    const handleCustomColorChange = (event) => {
    //   setCustomColor(event.target.value);
    //   setSelectedColor(event.target.value);
    console.log(event.target.value)
      setColor(event.target.value);
    };
  
    return (
      <div className="flex flex-wrap">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-16 h-16 m-2 cursor-pointer border border-gray-300 rounded-md ${
              selectedColor === color ? 'border-2' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
        {/* <div className="w-16 h-16 m-2 border border-gray-300 rounded-md"> */}
          {/* Display the selected color */}
          {/* <div
            className={`w-full h-full rounded-md ${
              selectedColor ? 'bg-' + selectedColor.substring(1) : ''
            }`}
          ></div> */}
        {/* </div> */}
        <div className="w-16 h-16 m-2 border border-gray-300 rounded-md relative">
          {/* Input for custom color */}
          <div className="absolute left-[12px] top-[-5px] text-white text-6xl pointer-events-none">+</div>
          <input
            type="color"
            className="w-full h-full rounded-md"
            value={customColor}
            onInput={handleCustomColorChange}
          />
        </div>
      </div>
    );
  };
  

// export default DarkColorPicker;
export default Layout
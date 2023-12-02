// export default function Clock({time }) {
//     return (
//       <div className="circle">
//     <h1 className="hora">
//       {time}
//             </h1>
//             </div>
//   );
// }

// //this should go on App.jsx
// import Clock from './components/reloj/Clock';

// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }

// function App() {
//   const time = useTime();
//   return (
//     <div>
//       <Clock time={time.toLocaleTimeString()} />
//     </div>
//   );
// }
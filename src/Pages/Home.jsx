import { useContext, useEffect,useState} from "react";
import { Redirect } from "react-router-dom";
import { contextApi } from "./ContextApi";
import data from "../db.json";
import axios from "axios";
import Youtube from "react-youtube";
const getdata = () => {
    const payload = {
        url  :"http://localhost:3000/youtube",
        method  : "get"
    }
    return axios(payload)
}
const patchData = (id , youtube) => {
    const payload = {
        "youtube_id" : youtube + "?autoplay=1"
    }
    const datas = {
        url  :`http://localhost:3000/youtube/${id}`,
        method  : "patch",
        data : payload
    }
    return axios(datas);
}
const Home = () => {
    const [login,setLogin] = useContext(contextApi);
    const [data ,setData] = useState([]);

    useEffect(() => {
      getdata()
      .then((res) => {
          setData(res.data);
      })
    },[])

    const playbtn = (id,youtubeid) => {
          patchData(id,youtubeid)
          getdata()
          .then((res) => {
              setData(res.data);
          })
    }
    

   
    return login ? <div>
        <div>
            {data.map((item) => (
                <div key={item.id}>
                 <div style={{display:"flex",marginLeft:"100px",marginTop:"20px"}}>
                 <iframe width="260" height="215" src={`https://www.youtube.com/embed/${item.youtube_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                
                 <div>
                 <h3>{item.title}</h3>
                 <button style={{width:"100px",height:"30px",marginLeft:"30px",background:"green",border:"none"}} onClick={() => playbtn(item.id,item.youtube_id)} >play</button>
                 </div>
                 </div>
                </div>
            ))}
           
        </div>
   
    </div> : <Redirect to="/" />
}
const _onReady = (event)  => {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
 }
export default Home;
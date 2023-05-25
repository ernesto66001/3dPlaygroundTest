
import {useState} from "react";
import {Pannellum} from "pannellum-react";
import village from '../images/anime_art_style_japanese_ancient_village_in_the_mo.jpg'
import space from '../images/anime_art_style_space_war_with_lazer_guns_and_spac.jpg'
import spaceView from '../images/anime_art_style_view_of_space_war_from_inside_a_sp.jpg'
import minecraft from '../images/super_art_minecraft_world.jpg'
const Home =()=>{
const [currency,setCurrency]=useState(space)
    return(
        <>
          <div className='h-screen flex '>
              <Pannellum width='100%' height='100%' image={currency} yaw={300} hfov={110} autoLoad autoRotate={-5}  showZoomCtrl={false} mouseZoom={false}>
<Pannellum.HotSpot type='custom' pitch={35} yaw={135} handleClick={(event,name)=>{
    setCurrency(currency!==space?space:spaceView)
}}/>
              </Pannellum>
          </div>
        </>
    )
}
export default Home
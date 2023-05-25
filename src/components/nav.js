import {Link,useLocation} from "react-router-dom";

const Nav =()=>{
    const location = useLocation()
    const navStyle='relative px-5 opacity-70 hover:opacity-100 hover:font-bold hover:bg-white hover:text-black h-full flex justify-center items-center transition-all ease-in-out duration-300'
    const navSelectedStyle='after:block after:absolute after:border-b-4 after:w-full after:border-red-500 after:bottom-0'
    const navItem=[
        {
            label:'home',
            to:'/'
        },
        {
            label:'about',
            to:'/about'
        },
        {
            label:'work',
            to:'/work'
        },
        {
            label:'contact',
            to:'/contact'
        },
    ]
    return(
        <div className='absolute bg-black left-20 top-0 shadow-md bg-opacity-60 h-[80px] flex justify-center w-[900px] rounded-b-lg z-10 lg:w-[700px] md:w-[500px] md:h-[60px] md:left-50'>
            <h1 className='top-10 text-5xl text-white font-black justify-center self-center mr-10  lg:text-3xl md:text-2xl'>My portfolio</h1>
            <nav className='text-white text-2xl flex justify-center items-center md:text-2xl'>
                {navItem.map(item=>
                    <>
                    <Link to={item.to} className={`${navStyle} ${location.pathname===item.to && navSelectedStyle}`}>{item.label}</Link>
                    </>
                )}
            </nav>
        </div>
    )
}
export default Nav
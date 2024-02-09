import { Link } from "@mui/material"





const Header=()=>{


    return(
      <>

      <h1>hello</h1>
      <ul>
        <li><Link href={"/image"}>Image</Link></li>
        <li><Link href={"/donkiApi"}>Donkiapi</Link></li>
      </ul>
      </>
    )

}

export default Header
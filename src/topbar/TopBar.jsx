import './topBar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg' 
          src='https://shakhzodbek.com/static/media/me.9b8085c797e90dbcb3fd.jpg' 
          alt="Avatar" 
        />
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}
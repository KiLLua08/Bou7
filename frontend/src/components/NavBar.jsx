import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-red-500'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold'>Bou7</h1>
        <ul className='flex gap-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/sign-up'>Sign-up</Link></li>
            <li><Link to='/sign-in'>Sign-in</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

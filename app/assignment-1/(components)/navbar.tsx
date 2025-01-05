import { Menu } from 'lucide-react'

const menus = [
    "Programs",
    "Courts",
    "Coaches",
    "Locations",
    "Contacts",
]

const Navbar = () => {
    return (
        <div className={`bg-black px-4 py-1 navbar rounded-3xl`}>
            <div className='navbar-start'>
                <h2 className={`text-white text-xl font-semibold font-orbitron`}>10is club</h2>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    {
                        menus.map((menu) => (
                            <li key={menu} className='text-white text-sm font-normal  p-2 btn btn-ghost'>{menu}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='navbar-end'>
                <button className='btn bg-fl-green hover:bg-fl-green hidden lg:block'>Get membership</button>
                <details className='dropdown visible lg:hidden dropdown-left'>
                    <summary className='btn btn-ghost'>
                        <Menu size={24} className='text-white' />
                    </summary>
                    <div>
                        <ul className="menu dropdown-content dropdown-menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {
                                menus.map((menu) => (
                                    <li key={menu} className='p-2 btn btn-ghost'>{menu}</li>
                                ))
                            }
                            <button className='btn bg-fl-green hover:bg-fl-green'>Get membership</button>
                        </ul>

                    </div>

                </details>
            </div>
        </div>
    )
}

export default Navbar
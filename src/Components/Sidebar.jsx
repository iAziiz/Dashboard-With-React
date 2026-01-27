function SideBar({activePage, onPagechange , onLoginOut}){
    const navItems = [
        {id:'dashboard', label:'Dashboard'},
        {id:'prodects', label:'Prodects'},
        {id:'orders', label:'Orders'},
        {id:'users', label:'Users'}
    ]
    return(
        <aside className="sidebar">
            <h2>Admin</h2>
            <nav>
                <ul className="nav-list">
                    {navItems.map((item) =>(
                        <li 
                        key={item.id}
                        className={activePage === item.id ? 'nav-item active' : 'nav-title'}
                        onClick={()=> onPagechange(item.id)}>
                        {item.label}
                        </li> 
                        
                    ))}
                    <button className="btn-logout" onClick={onLoginOut}>Log out</button>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar
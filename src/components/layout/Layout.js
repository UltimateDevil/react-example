import {Header} from './Header';
import Sidebar from './Sidebar';

const Layout = (props) => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout

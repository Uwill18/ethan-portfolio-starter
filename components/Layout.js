import {Sora} from '@next/font/google';

const sora = Sora({
  subsets:['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import TopLeftImg from '../components/TopLeftImg';
import Nav from '../components/Nav';
import Header from '../components/Header';


const Layout = ({children}) => {
  return <div>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>;
};

export default Layout;

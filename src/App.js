import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import MainComponent from './components/MainComponent';
import Collections from './components/collections/Collections';
import Showroom from './showroom/Showroom';
import OurStory from './ourstory/OurStory';
import ContactUs from './contactus/ContactUs';
import WeddingFayres from './weddingfayres/WeddingFayres';
import PersonalTailoring from './personalTailoring/PersonalTailoring';
import BoysSuits from './boyssuits/BoysSuits';
import Waistcoats from './waistcoats/Waistcoats';
import Accessories from './Accessories/Accessories';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import TermsCondition from './privacypolicy/TermsCondition';
import Faq from './faq/Faq';
import Trade from './tradelogin/Trade';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path='/' element={<MainComponent/>}>
<Route path='/' element={<Home/>}/>
<Route path='/collection/' element={<Collections/>}/>
<Route path='/showroom/' element={<Showroom/>}/>
<Route path='/ourstory/' element={<OurStory/>}/>
<Route path='/contactus/' element={<ContactUs/>}/>
<Route path='/weddingfayres/' element={<WeddingFayres/>}/>
<Route path='/PersonalTailoring/' element={<PersonalTailoring/>}/>
<Route path='/BoysSuits/' element={<BoysSuits/>}/>
<Route path='/Waistcoats/' element={<Waistcoats/>}/>
<Route path='/Accessories/' element={<Accessories/>}/>
<Route path='/PrivacyPolicy/' element={<PrivacyPolicy/>}/>
<Route path='/TermsCondition/' element={<TermsCondition/>}/>
<Route path='/FAQs/' element={<Faq/>}/>
<Route path='/TradeLogin/' element={<Trade/>}/>
   
</Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

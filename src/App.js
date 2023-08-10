import './App.css';
import { Routes,Route } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Discover from './scenes/discover'
import Users from './scenes/users'
import Support from './scenes/support'
import Documents from './scenes/documents'
import Applications from './scenes/applications'
import Pages from './scenes/pages'
import Inbox from './scenes/inbox'
import FileManager from './scenes/manager'
import DataList from './scenes/list'
import Settings from './scenes/settings'

function App() {
  return (
    <div className="app">
    <Sidebar/>
      <main className='content'>
        <TopBar/>
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/discover" element={<Discover /> }/>
              <Route path="/users" element={<Users />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/support" element={<Support />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/file" element={<FileManager />} /> 
              <Route path="/data" element={<DataList />} />  
             <Route path="/settings" element={<Settings />} />  
            </Routes>
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react'
import AppShell from './components/AppShell.jsx'
import Dashboard from './screens/Dashboard.jsx'
import Profile from './screens/Profile.jsx'
import CreateContent from './screens/CreateContent.jsx'
import NameProject from './screens/NameProject.jsx'

const INITIAL_PROFILE = {
  name: '',
  nmls: '',
  phone: '',
  email: '',
  headshotUrl: null,
}

export default function App() {
  const [view, setView] = useState('dashboard')
  const [profile, setProfile] = useState(INITIAL_PROFILE)
  const [projectName, setProjectName] = useState('')

  return (
    <AppShell activeView={view} onNavigate={setView}>
      {view === 'dashboard' && <Dashboard onCreateContent={() => setView('name-project')} />}
      {view === 'profile' && <Profile profile={profile} onChange={setProfile} />}
      {view === 'name-project' && (
        <NameProject
          onNext={(name) => {
            setProjectName(name)
            setView('wizard')
          }}
          onCancel={() => setView('dashboard')}
        />
      )}
      {view === 'wizard' && (
        <CreateContent
          projectName={projectName}
          onExitToDashboard={() => setView('dashboard')}
          profile={profile}
        />
      )}
    </AppShell>
  )
}

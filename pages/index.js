import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar({ githubUser } = props) {
  return (
    <Box>
      <img src={`http://github.com/${githubUser}.png`} alt="profile picture" />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'zecaloteiro'
  const favoriteUsers = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div style={{ gridArea: 'contentArea' }}>
          <Box><h1 className="title">BemVindo(a)</h1><OrkutNostalgicIconSet /></Box>
        </div>
        <div style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({favoriteUsers.length})</h2>
            <ul>
              {favoriteUsers.map((user) => {
                return (
                  <li>
                    <a href={`/users/${user}`} key={user}>
                      <img src={`http://github.com/${user}.png`} />
                      <span>{user}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidade</Box>
        </div >
      </MainGrid >
    </>
  )
}

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import FinalScreen from './pages/FinalScreen'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// eslint-disable-next-line
function App() {
  return (
    <Router>
      <Container maxWith="sm">
        <Box mt={5} textAlign="center" >
          <switch>
            <Typography variant="h1" fontWeight = "bold">QUIZZY</Typography>
            <Route exact path="/" component={Settings} />
            <Route path="/questions" component={Questions} />
            <Route path="/score" component={FinalScreen} />
          </switch> 
        </Box>
      </Container>
    </Router >
  );
}

export default App;

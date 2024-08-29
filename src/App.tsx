import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { home, snow, people } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Details from './pages/Details';
import Users from './pages/User';
import Topics from './pages/Topics';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route exact path='/details/:slug'>
						<Details />
					</Route>
					<Route exact path='/users'>
						<Users />
					</Route>
					<Route>
						<Redirect to='/home' />
					</Route>
					<Route path={'/topics'}>
						<Topics />
					</Route>
					<Route path={'/contracts'}>Ce sont les contracts</Route>
				</IonRouterOutlet>
				<IonTabBar slot='bottom'>
					<IonTabButton tab='home' href='/home'>
						<IonLabel>Home</IonLabel>
						<IonIcon icon={home} />
					</IonTabButton>
					<IonTabButton tab='details/jon' href='/details/jon'>
						<IonLabel>Go Jon !</IonLabel>
						<IonIcon icon={snow} />
					</IonTabButton>
					<IonTabButton tab='users' href='/users'>
						<IonLabel>Users</IonLabel>
						<IonIcon icon={people} />
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;